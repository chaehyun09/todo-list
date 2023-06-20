import "App.css";
import React, { useState } from "react";

let number = 3;
function App() {
  //state 선언
  //--> form에서 받은 값을 저장해주는 todo 객체로 만들어주기

  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  //todo가 여러개니까 배열로 todos 선언해주기
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "자바스크립트 공부하기",
      body: "자바스크립트 문법을 공부해봅시다.",
      isDone: true,
    },
  ]);

  //함수 만들기

  // event를 매개변수로 받을 수 있음
  // event.target = 이벤트가 일어난 애. input 태그
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  // form 태그에서 onSubmit으로 받는 이벤트함수
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  const onDeleteButtonHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // 완료, 취소 버튼에 붙여서 isDone 불리언값 바꿔주기
  const onEditHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  // list
  return (
    <>
      <div className="react">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      {/* 폼제출박스 */}
      <form onSubmit={onSubmitHandler} className="title-box">
        <div>
          <label>제목</label>
          <input
            className="input-box"
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
          ></input>

          <label>내용</label>
          <input
            className="input-box"
            name="body"
            value={todo.body}
            onChange={onChangeHandler}
          ></input>

          <button className="buttons">추가하기</button>
        </div>
      </form>
      {/* 투두리스트 붙이기... */}
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
    </>
  );
}

export default App;
