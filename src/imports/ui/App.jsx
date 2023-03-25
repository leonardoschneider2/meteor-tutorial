import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

/* Providing this tasks before make use in the DB */
/* The tutorial man say that I can be creative with taks. I will put bakery tasks */
const tasks = [
  { _id: 1, text: 'Prepare French Bread' },
  { _id: 2, text: 'Put Breads to Weight' },
  { _id: 3, text: 'Sell All Breads' },
];

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
  </div>
);
