import React from "react"


const HomeCategories = () => {
  return (
    <div className={}>
      {[3, 4, 4, 5,3,3 ,2].map((item, index) => (
        <h2 key={index}>this is hello {index}</h2>
      ))}
    </div>
  )
}

export default HomeCategories;