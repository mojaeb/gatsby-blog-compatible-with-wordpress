import React from "react"
import Styles from "./Pagination.module.css"
import { Link } from "gatsby"

const selectedPage = false

const generatePagination = (current, total) => {
  if (total === 1) return null;
  const first = current === 1 ? 1 : current > total - 2 ? 1 : current - 1;
  const second = current === 1 ? current + 1 : total - 2 === current || total === current || total - 1 === current ? 0 : current;
  const third = current === total ? current - 2 : current === 1 ? second + 1 :total - 2 === current ? current : current === total - 1 ? total - 2 : current + 1;
  const fourth = current === total ? current - 1 : total - 2 === current ? current + 1 : total - 1 === current ? current : 0;
  const fifth = current === total ? current : total;

  const arr = [first, second, third, fourth, fifth]
  return [...(total === 3 ? [first,2, fifth] : total === 2 ? [first, fifth] : arr)]
}


/**
 * @return {null}
 */

export default function Pagination({currentPage, totalPage, uri}) {
  if (!totalPage) {
    return null;
  }
  const numPages = generatePagination(currentPage, totalPage);
  if (!numPages) {
    return null
  }
  const preventPage = (e, exact = false) => { if (exact === true) e.preventDefault() }
  return (
    <div className={Styles.container}>
      <div className={Styles.main}>
        <Link to={`/${uri}/${currentPage - 1}`} onClick={e => preventPage(e, currentPage === 1)} className={selectedPage ? Styles.selected : null} style={{marginLeft: 30, marginRight: 5}}><span className={'dripicons-arrow-thin-right'}/></Link>
        {numPages.map((num, index) => (
          <Link to={`/${uri}/${num}`} key={index} onClick={!num ? e => preventPage(e, true) : null} className={num === currentPage ? Styles.selected : null}>
            {num ? num : '...'}
          </Link>
        ))}
        <Link to={`/${uri}/${currentPage + 1}`} onClick={e => preventPage(e, currentPage === totalPage)} className={selectedPage ? Styles.selected : null} style={{marginRight: 30, marginLeft: 5}}><span className={'dripicons-arrow-thin-left'}/></Link>
      </div>
    </div>
  )
}