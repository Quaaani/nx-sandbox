import { useEffect, useState } from 'react';

interface Todo {
  title: string;
}

export const App = () => {
  // Local Data
  // const [todos, setTodos] = useState<Todo[]>([
  //   { title: 'Todo 1' },
  //   { title: 'Todo 2' },
  // ]);

  // const addTodo = () => {
  //   setTodos((prev) => [
  //     ...prev,
  //     { title: `New Todo ${Math.floor(Math.random() * 1000)}` },
  //   ]);
  // };

  // Server Data
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = () => {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos((prev) => [...prev, data]);
      });
  };

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;
