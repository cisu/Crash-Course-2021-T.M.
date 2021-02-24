import {useState} from 'react';

const Tasks = () => {
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

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
