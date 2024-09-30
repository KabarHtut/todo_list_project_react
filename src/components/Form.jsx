import React, { useState } from 'react'

const Form = ({submitTask}) => {
  const [userTask, setUserTask] = useState('');

  const reloadSubmitTask = () => {
    submitTask(userTask);
    setUserTask('');
  }

  // const submitTask = () => {
  //   setUserTask('');
  //   console.log(userTask);
    
  // }
  return (
    <div>
      <div className="row">
        <div className="col-9 offset-1">
            <input value={userTask} onChange={ e=> setUserTask(e.target.value) } type="text" className='form-control' placeholder='Enter Message...' />
        </div>
        <div className="col-2">
            <button type="button" onClick={ () => reloadSubmitTask() } className='btn btn-primary'><i className="fa-solid fa-plus"></i> Add</button>
        </div>
      </div>
    </div>
  )
}

export default Form
