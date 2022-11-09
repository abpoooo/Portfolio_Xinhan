import {useEffect, useState} from "react";
import "./CityInput.scss";
import {AccessKey, BasicUrl, DefaultCity} from "../consts";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchAsyncAwait,
    fetchCityImage,
    fetchImageAsync,
    fetchImageInAction,
    fetchNewCity, fetchNewCity1
} from "../../actions/CityViewAction";

const CityInput = ({cbUpdateImages}) => {
    const [city, setCity] = useState(DefaultCity)
    const [images, setImages] = useState([])
    // set up dispatch in component
    const dispatch = useDispatch()
    const CityName = useSelector(state => state?.CityViewReducer?.newCity)

    // useEffect using the function in component
    // useEffect(() => fetchCity(city), [city])

    //useEffect using dispatch action
    // useEffect(() => dispatch(fetchImageInAction()), [])

    //event handler for key down
    const cbInput = (evt) => {
        let newCity = evt.target.value.trim().toLowerCase()
        // evt.key === 'Enter'  &&
        // newCity !== city && setCity(newCity)
        dispatch(fetchNewCity(newCity))
    }

    const cbChange = (evt) => {
        let newCity = evt.target.value.trim().toLowerCase()
        // evt.key === 'Enter'  &&
        // newCity !== city && setCity(newCity)
        dispatch(fetchNewCity1(newCity))

        console.log(newCity)
    }

    const fetchCity = city =>
        axios.get(BasicUrl, {
            params: {
                query: city,
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
                thumb: item.urls.thumb
            }))
            setImages(imageList)
            cbUpdateImages(imageList)
            console.log('tidied data', imageList)

        }).catch(err => console.log('fetch city http error!', err))


    return (
        <div className="searchBar">
            <input
                className="inputCity"
                type="text"
                placeholder="Search City here ..."
                onKeyDown={cbInput}
                onChange={cbChange}
            />
            <button onClick={() => dispatch(fetchImageInAction())}>
                Click
            </button>
            <button onClick={() => dispatch(fetchImageAsync())}>Fetch with Async Action</button>
            {/*{JSON.stringify(images)}*/}
            <button onClick={() => dispatch(fetchAsyncAwait())}>Fetch Async Await</button>
            <button onClick={() => dispatch(fetchCityImage(CityName))}>Search New City</button>
        </div>
    )
}

export default CityInput