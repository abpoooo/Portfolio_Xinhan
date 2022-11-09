import "./CityView.scss";
import CityInput from "./CityInput";

import {useState} from "react";

import ImageList from "./ImageList";
import {useSelector} from "react-redux";

function CityView() {

    const isLoading =useSelector(state => state?.CityViewReducer?.isLoading)
    const Background = useSelector(state => state?.CityViewReducer?.imgLibrary)
    const index = useSelector(state => state?.CityViewReducer?.index)
    const [images, setImages] = useState([])
    const updateImages = (newImages) => setImages(newImages)

    return <div className="CityView"
                style={{background: `url('${Background[index]?.regular}')no-repeat center center/cover fixed`}}>
        <CityInput cbUpdateImages={updateImages}/>
        <ImageList images={images}/>
        {isLoading && <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'/>}


    </div>
}

export default CityView;