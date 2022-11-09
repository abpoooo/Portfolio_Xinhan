import "./ImageList.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchIndex} from "./actions/CityViewAction";

const ImageList = ({images}) => {

    const newImageList = useSelector(state => state?.CityViewReducer?.imgLists)
    const dispatch = useDispatch()
    console.log('images got from ImageList', images)
    return (
        <div className="gallery">
            {
                newImageList && newImageList.map((img, index) => {
                    return <div
                        className="imgContainer"
                        key={index}
                        onClick={() => {
                            dispatch(fetchIndex(index))
                        }}
                        style={{background: `url('${img.url}') no-repeat center center fixed`}}>
                    </div>
                })
            }
        </div>
    )
}

export default ImageList