import React from 'react'
import Styles from './MainSlider.module.css'
import Img from 'gatsby-image'


const MainSlider = ({image}) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.row}>
                <div className={Styles.text}>
                    <p className={Styles.title}>Contrary to popular texture, Lorem Ipsum the best</p>
                    <p className={Styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                </div>
                <div className={Styles.imageContainer}>
                    <Img fluid={image.childImageSharp.fluid} className={Styles.image}/>
                </div>
            </div>
        </div>
    )
}

export default MainSlider