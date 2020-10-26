import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [

  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
];



const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select A Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
    );
};

export default Translate;
