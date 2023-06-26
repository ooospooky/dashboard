import React, { useState } from 'react';
import './App.scss';
import { Form } from './Components/Form'
// import FetchData from './Helper/FetchData'
function App() {
  interface IPeopleData {
    'household_ordinary_m':string,
     'household_ordinary_f': string,
    'household_single_f': string,
    'household_single_m': string,
    'household_ordinary_total': string,
    'household_single_total':string
  }
  const [peopleData, setPeopleData] = useState({})
  console.log(peopleData)
  return (
    <div className="App">
      <div className="navbar">
        <span>LOGO</span>
        <span>LOGO</span>
      </div>
      <div className='container'>
        <div className='brand'>
          <span className='brand__span'>TAIWAN</span>
        </div>
        <div className='content_container'>
          <div className='content'>
            <h1 className='content__h1'>人口數、戶數按戶別及性別統計</h1>
            <Form setPplData={setPeopleData}></Form>
            <div className="hr-with-text">
              <hr />
              <span>搜尋結果</span>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
