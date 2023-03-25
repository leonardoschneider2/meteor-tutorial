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
  <div className="App">
    <h1 className="App__welcome">Welcome to Meteor!</h1>
    {/* 
      <Hello/>
      <Info/>
    */}
    <ul className="App__tasks-list">
      {
        tasks.map(({ text }, index) => {
          console.log(text);
          return (
            <li
              key={ `${index}-${text}` }
              className="App__tasks-list__li"
            >
              { text }
            </li>
          )
        })
      }
    </ul>
  </div>
);
