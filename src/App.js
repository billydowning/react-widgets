import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

export default () => {



  return (
    <div>
      <Translate />
    </div>
    );
};

