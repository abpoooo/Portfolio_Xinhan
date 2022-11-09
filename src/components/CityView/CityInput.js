import {useEffect, useState} from "react";
import "./CityInput.scss";
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchImages, fetchNewCity} from "./actions/CityViewAction";

const CityInput = ({cbUpdateImages}) => {
    const [city, setCity] = useState(DefaultCity)
    const [images, setImages] = useState([])
    useEffect(() => fetchCity(city), [city])
    const dispatch = useDispatch()
    const newCity = useSelector(state => state?.CityViewReducer?.newCity)


    //event handler for key down
    const cbInput = (evt) => {
        let newCity = evt.target.value.trim().toLowerCase()
        evt.key === 'Enter' &&
        // newCity !== city && setCity(newCity)
        dispatch(fetchNewCity(newCity))
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
            />
            <button onClick={() => {
                dispatch(fetchImages(newCity))
            }}>
                Search New City
            </button>
            {/*{JSON.stringify(images)}*/}
        </div>
    )
}

export default CityInput