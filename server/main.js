import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';
import '/imports/api/TasksMethods';

const insertTask = taskText => TasksCollection.insert({ text: taskText, concluded: false });

Meteor.startup(async () => {
  
});