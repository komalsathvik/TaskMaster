import React, { useState } from "react";
function Home() {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!todo.trim) return;
    setTasks((prevTasks) => [...prevTasks, todo]);
    setTodo("");
  };
  return (
    <>
      <h1 className="mt-3">Task Manager</h1>
      <h2 className="mt-4">Add Tasks</h2>
      <div className="container">
        <div className="row">
          <div className="col-6 mt-3 p-5">
            <h2>Add new task</h2>
            <div className="m-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter task
              </label>
              <input
                className="form-control"
                placeholder="Enter task name"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                ADD
              </button>
            </div>
          </div>
          <div className="col-6 mt-3 p-5">
            <h1>ALL TASKS</h1>
            <div>
              {tasks.map((task) => {
                return <h2>{task}</h2>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
