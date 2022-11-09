import axios from "axios";
import {AccessKey, BasicUrl, FETCH_CITY, FETCH_IMAGES, FETCH_INDEX, LOADING} from "../consts";


export const fetchIndex = index => {
    return {
        type: FETCH_INDEX,
        payload: index
    }
}

export const fetchNewCity = NewCity => dispatch => {
    dispatch(
        {
            type: FETCH_CITY,
            payload: NewCity
        }
    )
}


export const fetchImages = NewCity => dispatch => {
    dispatch({
        type: LOADING,
        payload: true
    })
    axios.get(BasicUrl, {
        params: {
            query: NewCity,
            orientation: 'landscape'
        },
        headers: {
            Authorization: `Client-ID ${AccessKey}`
        }
    }).then(res => {
        let {data: {results}} = res
        let imageList = results.map(item => ({
            des: item.alt_description,
            regular: item.urls.regular,
            url: item.urls.thumb
        }))
        console.log('fetch API?')
        dispatch({
            type: FETCH_IMAGES,
            payload: imageList
        })
        dispatch({
            type: 'LOADING',
            payload: false
        })

    }).catch(err => {console.log('fetch city http error!', err)
        dispatch({
            type: 'LOADING',
            payload: false
        })})
    console.log('async?')
}

