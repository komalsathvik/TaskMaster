import React, { useState } from "react";
type Task = {
  taskNum: number;
  taskName: string;
};
function Home() {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!todo.trim()) return;
    const newTask = {
      taskNum: Date.now(),
      taskName: `${todo}`,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTodo("");
  };
  const handleDelete = (taskName: string) => {
    const updatedTasks = tasks.filter((task) => {
      return task.taskName !== taskName;
    });
    setTasks(updatedTasks);
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
              {tasks.map((task, index) => {
                return (
                  <div key={index}>
                    <h2 key={index}>
                      {index + 1}.&nbsp;
                      {task.taskName}&nbsp;&nbsp;&nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(task.taskName)}
                      >
                        delete
                      </button>
                    </h2>{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
