import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Food Shopping',
      day: 'Feb 5 at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Food running',
      day: 'Feb 6 at 3:40pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'sex kebab',
      day: 'Feb 14 at 0:00pm',
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
