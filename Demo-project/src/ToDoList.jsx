import React, { useState } from 'react';
function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast","Take a shower","Walk the dog"]);
    const [newTask, setNewTask] = useState('');
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() === '') return;
        setTasks(t => [...t, newTask]);
        setNewTask('');
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
    if(index>0){
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index-1];
        updatedTasks[index-1] = updatedTasks[index];
        updatedTasks[index] = temp;
        setTasks(updatedTasks);
    }
    }
    function moveTaskDown(index){
    if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index+1];
        updatedTasks[index+1] = updatedTasks[index];
        updatedTasks[index] = temp;
        setTasks(updatedTasks);
    }
    }   

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <input type="text"
            placeholder="Enter a new task..."
            value={newTask}
           onChange={handleInputChange} />
           <button
           className="add-button"
           onClick={addTask}>Add Task</button>
            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                     className="delete-button"
                     onClick={() => deleteTask(index)}>Delete
                    </button>
                     <button
                     className="move-up-button"
                     onClick={() => moveTaskUp(index)}>Up
                    </button>
                    <button
                     className="move-down-button"
                     onClick={() => moveTaskDown(index)}>Down
                    </button>
                </li>
                )}
            </ol>
        </div>
    );
}
export default ToDoList;