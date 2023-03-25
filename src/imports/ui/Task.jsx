import react from 'react';

export const Task = ({ task }) => {
  return (
    <li>
      { task.text }
    </li>
  )
};