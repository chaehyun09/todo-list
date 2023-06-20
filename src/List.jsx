import React from 'react'

function List({todos, onDeleteButtonHandler, onEditHandler}) {
  return (
    <div className="todo-wrapper">
<h2>Working..🔥</h2>
<div className="cards-container">
  {todos.map((todo) => {
    if (!todo.isDone) {
      return (
        <div key={todo.id} className="todo-cards">
          <h3 className="todo-title">{todo.title}</h3>
          <div className="todo-body">{todo.body}</div>
          <div className="buttons-set">
            <button
              onClick={() => onDeleteButtonHandler(todo.id)}
              className="buttons"
            >
              삭제하기
            </button>
            <button
              onClick={() => onEditHandler(todo.id)}
              className="buttons"
            >
              완료
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  })}
</div>
<h2>Done..!🎉</h2>
<div className="cards-container">
  {todos.map((todo) => {
    if (todo.isDone) {
      return (
        <div className="todo-cards">
          <h3 className="todo-title">{todo.title}</h3>
          <div className="todo-body">{todo.body}</div>
          <div className="buttons-set">
            <button
              onClick={() => onDeleteButtonHandler(todo.id)}
              className="buttons"
            >
              삭제하기
            </button>
            <button
              onClick={() => onEditHandler(todo.id)}
              className="buttons"
            >
              취소
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  })}
</div>
</div>
  )
}

export default List