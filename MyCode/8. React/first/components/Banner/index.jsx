import "../../assets/style.css"
import BannerImage from "../../assets/banner.jpg"

export const Banner = () => {
    return (
        <div className="banner">
            <img src={BannerImage} alt="" />
        </div>
    )
}