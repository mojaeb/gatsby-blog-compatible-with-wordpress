import React from "react"
import Styles from './Categories.module.css';
import {Link} from "gatsby"

const HomeCategories = ({categories}) => {

  return (
    <div>
      <div className={Styles.container}>
        {categories.edges.map((category, index) => (
          <Link to={`/all-posts/${category.node.slug}/1`} className={Styles.button} key={index}>
            <div className={Styles.textContainer}>
              <h5 className={Styles.textButton}>{category.node.name}</h5>
              <p className={Styles.description}>{category.node.description}</p>
              <span className={Styles.learnMore}>
                <p className={Styles.learnMoreText}>دیدن مطالب</p>
                <span className={`${Styles.learnMoreIcon} dripicons-arrow-thin-left`} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomeCategories;