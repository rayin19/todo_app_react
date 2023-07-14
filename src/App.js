import './App.css';
import { Fragment, useState} from 'react';

const App = () => {

  const [taskList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [currentCount, setCurrentCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const updateInputField = (event) => {
    setTaskInput(event.target.value);
  }

  const submitTask = () => {
    if(taskInput !== ''){
      const newCurrentCount = currentCount+1;
      const newTotalCount = totalCount + 1;
      const newTaskList = [...taskList, {
        id: newTotalCount,
        title: taskInput
      }];

      setCurrentCount(newCurrentCount);
      setTotalCount(newTotalCount)
      setTaskList(newTaskList);
      setTaskInput('');
    }
  }

  const checkItem = (event) => {
    const {classList} = event.target;

    if(classList.contains('striked-item')){
      classList.remove('striked-item');
      setCurrentCount(currentCount + 1);
    }

    else{
      classList.add('striked-item');
      setCurrentCount(currentCount - 1);
    }
  }
  


  return (
    <div className="App">
      <h1>Todo List</h1>

      {/* For Making new Tasks */}
      <input type='text' value={taskInput} onChange={updateInputField}/>
      <button onClick={submitTask}>Add Task</button>

      <p>{currentCount} out of {totalCount} remaining tasks.</p>

      <table>
      <tbody>
        {
          taskList.map((task) => {
            return(
              <tr key={task.id} onClick={checkItem} className='task-item-class' >{task.title}</tr>
            )
          })
        }
        </tbody>
        </table>

    </div>
  );
}

export default App;
