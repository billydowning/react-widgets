import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JS Library'
  },
  {
    title:  'Why use React?',
    content: "React is super fucking dope, that's why, son"
  },
  {
    title: 'How do you use React?',
    content: 'You create components, yo'
  },

];

export default () => {
  return (
    <div>
      <Search />

    </div>
    );
};

