import React from 'react'

function Form({todo, onSubmitHandler, onChangeHandler}) {

  return (
    <form onSubmit={onSubmitHandler} className="title-box">
    <div className='input-group'>
      <label className='form-label'>제목</label>
      <input
        className="input-box"
        name="title"
        value={todo.title}
        onChange={onChangeHandler}
      ></input>
    </div>
    <div className='input-group'>
      <label className='form-label'>내용</label>
      <input
        className="input-box"
        name="body"
        value={todo.body}
        onChange={onChangeHandler}
      ></input>
    </div>
      <button className="buttons">추가하기</button>
  </form>
  )
}

export default Form;