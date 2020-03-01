// React
import React from 'react';

// Components
import SearchForm from './components/SearchForm';

// CSS
import './App.scss';

// Constants
import { HEADER_TEXT } from './constants/general';

const App = () => {
  return (
    <div className="App">
      <div className="App__search--container">
        <header className="App__search--header">{HEADER_TEXT}</header>

        <SearchForm />
      </div>
    </div>
  );
};

export default App;
