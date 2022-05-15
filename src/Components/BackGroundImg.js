import '../Css/BackGroundImg.css'
import image from '../BackGroundImg.jpg'

export default function BackGroundImg() {
    return (
        <img src={image} className="backGroundImg" alt="" />
    );
}