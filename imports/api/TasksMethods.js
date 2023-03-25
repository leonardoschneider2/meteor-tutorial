import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { TasksCollection } from "./TasksCollection";

Meteor.methods({
  'task.insert'(task) {
    check(task, String);

    TasksCollection.insert({ text: task, concluded: false });
  },
  'task.update'(taskId, status) {
    check(taskId, String);
    check(status, Boolean);

    TasksCollection.update(
      { _id: taskId }, 
      { $set: { concluded: status } },
    );
  },
  'task.delete'(taskId) {
    check(taskId, String);
  },
});
