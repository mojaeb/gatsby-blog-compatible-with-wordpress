import React from 'react';
import Styles from './Pagination.module.css';
import {Link} from "gatsby"

const selectedPage = false

const generatePagination = (current, total) => {
  const first = current === 1 ? 1 : current > total - 2 ? 1 : current - 1;
  const second = current === 1 ? current + 1 : total - 2 === current || total === current || total - 1 === current ? '...' : current;
  const third = current === total ? current - 2 : current === 1 ? second + 1 :total - 2 === current ? current : current === total - 1 ? total - 2 : current + 1;
  const fourth = current === total ? current - 1 : total - 2 === current ? current + 1 : total - 1 === current ? current : '...';
  const fifth = current === total ? current : total;

  return [first, second, third, fourth, fifth]
}


export default function Pagination({currentPage, totalPage}) {
  const current = 9;
  const total = 10;

  return (
    <div className={Styles.container}>
      <div className={Styles.main}>
        <Link to={`/total-posts-page/${current - 1}`} className={selectedPage ? Styles.selected : null} style={{marginLeft: 30, marginRight: 5}}><span className={'dripicons-arrow-thin-right'}/></Link>
        {generatePagination(current, total).map((num, index) => (
          <Link to={`/total-posts-page/${num}`} key={index} className={num === current ? Styles.selected : null}>
            {num}
          </Link>
        ))}
        <Link to={`/my-page/${current + 1}`} className={selectedPage ? Styles.selected : null} style={{marginRight: 30, marginLeft: 5}}><span className={'dripicons-arrow-thin-left'}/></Link>
      </div>
    </div>
  )
}