import React from 'react'
import Cart from './Cart'

const List = ({tasks, deleteTasks, updateTasks}) => {
  return (
    <div>      
        <div>
            <ol className='list-group'>
                <Cart tasks={tasks} deleteTasks={deleteTasks} updateTasks={updateTasks}/>
            </ol>
        </div>
    </div>
  )
}

export default List
