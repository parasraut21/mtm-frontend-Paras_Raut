import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskInput from './components/TaskInput';
import TasksList from './components/TasksList';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks`);
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => {
      if (task._id === updatedTask._id) {
        return updatedTask;
      }
      return task;
    }));
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Itinerary Planner</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-5">
      <h1 className="text-center mb-4" style={{ color: '#0056b3' }}>Plan Your Itinerary</h1>
        <TaskInput addTask={addTask} />
        <TasksList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      </Container>
      <footer className="text-center text-lg-start bg-light text-muted">
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2023 Itinerary Planner
        </div>
      </footer>
    </div>
  );
}

export default App;