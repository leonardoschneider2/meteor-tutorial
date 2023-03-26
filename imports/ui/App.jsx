import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';
import { Form } from './Form';

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  return (
    <div className="App">
      <div className="App__title-section">
        <h1 className="App__title">Meteor Tutorial!</h1>
        <h2 className="App__sub-title">You're welcome to learn with me.</h2>
      </div>

      <ul className="App__task-list">
        { tasks.map(task => <Task key={ task._id } task={ task }/>) }
      </ul>

      <Form/>
    </div>
  );
};