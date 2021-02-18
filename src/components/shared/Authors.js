import React, { useEffect, useState } from "react"
import Styles from "./Authors.module.css"

const title = 'this world is so small then no angry this world is so small then no angry',
  description = 'description is description is available from to you and other thinks description is available from to you and other thinks  available from to you and other thinks description is available from to you and other thinks description is available from to you and other thinks description is available from to you and other thinks'
const dec_2 = 'is description is available from to you and other thinks description is available from to you and'

const INITIAL_DATA = [
  {id: '26', name: 'michael jackson', title, description, available: true, color: '#33f3bf'},
  {id: '27', name: 'son micro', title, description: dec_2, available: false, color: '#b7f33f'},
  {id: '28', name: 'lana del ray', title, description, available: false, color: '#f35747'},
  {id: '29', name: 'alexander nilson', title, description, available: false, color: '#6243f3'}
];

const Authors = (props) => {
  const [state, setState] = useState({authors: [], selected: null})
  React.useEffect(() => {
    if (props.data) {
      const authors = props.data.map(item => item.node);
      setState({
        ...state,
        authors: [...authors],
        selected: {...authors[0]}
      })
    }
  }, [props.data])
  const handleSetAuthor = (event, id) => {
    event.preventDefault();
    const select = state.authors.find(item => item.id === id)
    setState({...state, selected: select})
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.pic_container}>
        {state.authors.map((author, index) => {
          console.log(author)
          return (
            // <Img fluid={author.featured_media.localFile.childImageSharp.fluid} />
            <PicItem
              index={author.id}
              key={author.id}
              author={author}
              placeholderImage={author.featured_media.localFile.childImageSharp.fluid.tracedSVG}
              image={author.featured_media.localFile.childImageSharp.fluid.src}
              onClick={handleSetAuthor}
              selected={state.selected}
            />
          )
        })}
      </div>
      {state.selected ? (
        <AuthorContent author={state.selected}/>
      ): null}
    </div>
  )
}

const AuthorContent = ({author}) => {
  return (
    <div className={Styles.content_container}>
      <p className={Styles.content_title}>{author.title}</p>
      <div className={Styles.content_description}>
        <div className={Styles.quotation}/>
          <div dangerouslySetInnerHTML={{__html: author.content}}/>
        <div className={[Styles.quotation, Styles.quotation_rotate].join(' ')}/>
      </div>
      <div className={Styles.content_name}>
        <img src={author.featured_media.author.avatar_urls.wordpress_48} alt=""/>
        <div>
          <p style={{color: '#777'}}>author name</p>
          <p style={{fontWeight: 'bold'}}>{author.featured_media.author.name}</p>
        </div>
      </div>
    </div>
  )
}


const PicItem = ({author, onClick, selected, index, placeholderImage, image}) => {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      const imageLoader = new Image()
      imageLoader.src = image;
      imageLoader.onload = () => {
          setSrc(image)
      }
    }, 500)
  }, [])
  return (
    <div
      key={index}
      onClick={event => onClick(event, author.id)}
      style={{backgroundImage: `url("${src || placeholderImage}")`}}
      className={[Styles.pic_item, author.id === selected.id ? Styles.pic_item_available : null].join(' ')}
      // style={author.available ? {backgroundColor: author.color}: null}
    />
  )
}


export default Authors