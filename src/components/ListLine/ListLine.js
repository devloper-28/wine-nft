import React from 'react'
import { Link } from 'react-router-dom'
import "./listline.css"

const ListLine = ({titleList,fullList,to}) => {
  return (
    <>
    <div className='List-line'>
        <p className='title-list'>{titleList}</p>
        <hr />
        <Link to={to} className='full-list'>{fullList}</Link>
    </div>
    </>
  )
}

export default ListLine