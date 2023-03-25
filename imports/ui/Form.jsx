import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export function Form () {
  const [task, setTask] = useState('');

  const insertTask = () => {
    Meteor.call('task.insert', task);
  };

  return (
    <form>
      <input
        value={ task }
        onChange={ ({ target }) => setTask(target.value) }
      />
      <button
        type="button"
        onClick={ () => insertTask() }
      >
        Insert Task!
      </button>
    </form>
  )
};