import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';
import { Form } from './Form';

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <ul>
        { tasks.map(task => <Task key={ task._id } task={ task.text }/>) }
      </ul>

      <Form/>
    </div>
  );
};