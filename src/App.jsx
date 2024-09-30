import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import List from './components/List';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Form from './components/Form';
import { api } from './api/apiResource';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks , setTasks] = useState([])
  const fetchData = async () => {
    const res = await api.get('/todoLists')

    setTasks(res.data);
  }
  
  useEffect(() => {
    fetchData();
  }, [tasks]);

  const submitTask = async (userTask) => {
    const data = {
      id : uuidv4(),
      task: userTask,
      complete: false
    }  
    await api.post('/todoLists', data);
  }

  const deleteTasks = async (taskId) => {
    await api.delete(`/todoLists/${taskId}`)   
  }

  const updateTasks = async (taskId, complete) => {
    await api.patch(`/todoLists/${taskId}`, {complete})   
  }
  return (
    <div className='mx-auto w-50 mt-5'>
      <Form submitTask = {submitTask}/>
      <List tasks = {tasks} deleteTasks={deleteTasks} updateTasks={updateTasks} />
    </div>
  );
}

export default App;
