import { Meteor } from 'meteor/meteor';
import React from 'react';

export const Task = ({ task }) => {
  console.log(task);
  const spanClass = (task.concluded)
    ? "task-list__item-concluded"
    : "task-list__item";

  const updateTask = () => {
    Meteor.call('task.update', task._id, task.concluded);
  };

  const deleteTask = () => {
    Meteor.call('task.delete', task._id);
  };

  return (
    <li className="App__task-list__item">
      <p className={ spanClass }>{ task.text }</p>
      <button type="button" onClick={ () => updateTask() }>
        { (task.concluded) ? "CANCEL TASK" : "CONCLUDE TASK" }
      </button>
      <button type="button" onClick={ () => deleteTask() }>
        DELETE TASK
      </button>
    </li>
  )
}