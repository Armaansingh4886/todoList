import React from 'react'

const ListItem = (props) => {
  return (
    <div className='listitem'>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}

export default ListItem
