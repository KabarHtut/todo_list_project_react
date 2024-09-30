/* eslint-disable no-restricted-globals */
import React from "react";

const Cart = ({ tasks, deleteTasks, updateTasks }) => {
  // const deleteTasks = (taskId) => {
  //   console.log(taskId);

  // }

  const comfirmDeleteTasks = (taskId) => {
    if (confirm("Are you sure ?")) {
      deleteTasks(taskId);
    }
  };
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className={ task.complete ? 'list-group-item w-100 mt-3 shadow-sm bg-success text-decoration-line-through text-white' : 'list-group-item w-100 mt-3 shadow-sm' }>
          <div className="row">
            <div className="col-9 offset-1"><input type="checkbox" className="me-3" onClick={()=> updateTasks(task.id, !task.complete)} checked = {task.complete == true}/> {task.task}</div>
            <div className="col-2">
              <i
                className="fa-solid fa-trash"
                onClick={() => comfirmDeleteTasks(task.id)}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
