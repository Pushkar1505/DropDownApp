import React, { useState } from 'react';
import "./App.css";
import Dropdown from './components/dropdown';

const App = () => {
  const DROPDOWN_OPTIONS = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'Ruby',
  ]
  const [selectedOption, setSelectedOption] = useState("Select");

  return (
    <div className='app'>
      <Dropdown
        options={DROPDOWN_OPTIONS}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        label={"Select your favorite programming language?"}
      />
    </div>
  )
};

export default App;