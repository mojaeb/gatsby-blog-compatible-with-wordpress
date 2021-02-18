import React from "react"
import Styles from "./MainSlider.module.css"
import Img from "gatsby-image"


const MainSlider = ({image}) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.row}>
                <div className={Styles.text}>
                    <div className={Styles.title}>
                        <p>بــرتــرین مطـالـب</p>
                        <p>بـرای برتـرین هـا</p>

                    </div>
                    <p className={Styles.description}>دوتاپس سعی می کنه مطالب با کیفیت و جدید رو برای توسعه دهندگان و علاقه مندان به علوم کامپیوتر رو جمع آوری و نشر کنه</p>
                </div>
                <div className={Styles.imageContainer}>
                    <Img fluid={image && image.childImageSharp.fluid} className={Styles.image}/>
                </div>
            </div>
        </div>
    )
}

export default MainSlider