import React from 'react'

const Add = () => {
  return (
    <div className='add'>
      <label >Title</label>
      <input type='text' placeholder='Title...'></input>
      <label>Description</label>
      <textarea placeholder='Description...'></textarea>
    <button>Add To List</button>

    </div>
  )
}

export default Add
