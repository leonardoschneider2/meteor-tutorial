import React from 'react';

export const Task = ({ task }) => {
  console.log(task);
  return (
    <li>
      { task }
    </li>
  )
}