import "./ImageList.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchIndex} from "../../actions/CityViewAction";

const ImageList = ({images}) => {

    // use data from global store
    const imageLibrary = useSelector(state => state?.CityViewReducer?.imgLibrary)
    const index = useSelector(state => state?.CityViewReducer?.index)
    const dispatch = useDispatch()

    console.log('images got from ImageList', images)
    return(
        <div>
            <h1>
                {/*{index}*/}
            </h1>
            <div className="gallery">
                {
                    // images && images.map((img, index) => {
                    imageLibrary && imageLibrary.map((img, index) => {
                        return <div
                            className="imgContainer"
                            key={index}
                            onClick={()=>{
                                dispatch(fetchIndex(index))
                            }}
                            style={{background: `url('${img.url}') no-repeat center center fixed`}}>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ImageList