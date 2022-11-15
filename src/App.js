import React from 'react';
import Navbar from './Components/Navbar/navbar'
import Banner from './Components/banner/banner'
import Rowpost from './Components/rowpost/rowpost'
import './App.css';
import {orginals,action,comedy,horror,document,romance} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={orginals} title='Netflix Originals'/>
      <Rowpost url={action} title='Actions' isSmall />
      <Rowpost url={comedy} title='Comedy Movies' isSmall />
      <Rowpost url={horror} title='Horror Movies' isSmall />
      <Rowpost url={romance} title='Romantic Movies' isSmall />
      <Rowpost url={document} title='Documentary' isSmall />
    </div>
  );
}

export default App;
