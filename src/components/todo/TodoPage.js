import React, {useCallback, useReducer, useState} from 'react';
import Title from "../common/title/Title";
import TodoList from "./components/TodoList";

const initialState = [];

function initState(value) {
  return value;
}

const TodoActions = {
  ADD: 'ADD',
};

function todoReducer(state, action) {
  switch (action.type) {
    case TodoActions.ADD:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

function TodoPage() {
  const [todoText, setTodoText] = useState('');

  const [todos, dispatchTodos] = useReducer(todoReducer, initialState, initState);

  const addTodo = useCallback(() => {
    dispatchTodos({
      type: TodoActions.ADD,
      payload: todoText
    });
    setTodoText('');
  }, [todoText]);


  const onChangeTodoText = useCallback(
    (event) => setTodoText(event.target.value),
    []);

  return (
    <>
      <Title
        title="Todo App"
        subtitle="This example demonstrate the use of use reducer hook."
      />
      <div className="d-flex justify-content-center row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-11">
              <input type="text"
                     className="form-control"
                     placeholder="Enter your todo..."
                     value={todoText}
                     onChange={onChangeTodoText}
              />
            </div>
            <div className="col-sm-1">
              <button type="button"
                      className="btn btn-primary"
                      onClick={addTodo}>
                Add
              </button>
            </div>
          </div>
          <div className="my-5"/>
          <TodoList
          todos={todos}
          />
        </div>
      </div>
    </>
  );
}

export default TodoPage;