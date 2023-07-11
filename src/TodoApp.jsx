import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Entry from './Entry.jsx';

let nextId = 6;
const preparedTodos = [
  {
    id: 1,
    title: 'Müll raus tragen',
  },
  {
    id: 2,
    title: 'Geschirr spülen',
  },
  {
    id: 3,
    title: 'Wäsche aufhängen',
  },
  {
    id: 4,
    title: 'Coden üben',
  },
  {
    id: 5,
    title: 'Wasser trinken',
  },
];

function TodoApp() {
  const [ counter, setCounter ] = useState(0);
  const [ todoInput, setTodoInput ] = useState('');
  const [ todos, setTodos ] = useState([...preparedTodos])

  function clickHandler() {
    setCounter(counter + 1);
  }

  function removeTodo(id) {
    const newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    const entry = {
      id: nextId,
      title: todoInput,
    };
    nextId += 1;
    setTodos([...todos, entry]);
    setTodoInput('');
  }

  const { todoId } = useParams();

  const output = `${counter} clicks, todo Id: ${todoId}`;

  return (
    <>
      <h1 onClick={clickHandler}>
        Hallo welt { output }
      </h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
      <ul>
        {todos.map((todo) => (
          <Entry
            key={todo.id}
            content={todo.title}
            color="blue"
            onRemove={() => { removeTodo(todo.id) }}
          />
        )) }
      </ul>
    </>
  );
}

export default TodoApp;
