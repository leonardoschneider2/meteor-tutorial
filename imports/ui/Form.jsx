import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export function Form () {
  const [task, setTask] = useState('');

  const insertTask = (e) => {
    try {
      e.preventDefault();

      if (!task) { throw new Error('invalid') }
      Meteor.call('task.insert', task);
  
      setTask('');
    } catch (error) {
      setTask('ERRO AO ENVIAR REQUISIÇÃO!');
    }
  };

  const dropDataBase = (e) => {
    try {
      e.preventDefault();

      Meteor.call('task.dropDataBase');
  
      setTask('');
    } catch (error) {
      setTask('ERRO AO ENVIAR REQUISIÇÃO!');
    }
  };

  return (
    <form onSubmit={ (e) => insertTask(e)}>
      <input
        value={ task }
        onChange={ ({ target }) => setTask(target.value) }
      />
      <button
        type="submit"
        onClick={ (e) => insertTask(e) }
      >
        Insert Task!
      </button>
      <button
        type="button"
        onClick={ (e) => dropDataBase(e) }
      >
        Drop DataBase!
      </button>
    </form>
  )
};