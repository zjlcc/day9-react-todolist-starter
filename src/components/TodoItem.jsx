import {
  useContext,
  useState
} from 'react';
import {TodoContext} from '../App';
import styles from '../Todo.css';

const TodoItem = (props) => {
  const {
          todoItem
        } = props
  const {dispatch} = useContext(TodoContext);

  function handleDone () {
    dispatch({
      type: 'DONE',
      payload: todoItem.id
    })
  }

  function handleDelete () {
    dispatch({
      type: 'DELETE',
      payload: todoItem.id
    })
  }

  return (
    <div>
      <span className={`todo-item ${todoItem.done ? 'line-through' : 'none'}`} onClick={handleDone}>{todoItem.text}</span>
      <button onClick={handleDelete}>X</button>
    </div>
  )
}

export default TodoItem