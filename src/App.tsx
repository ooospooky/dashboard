import React, { useState } from 'react';
import './App.scss';
import { Form } from './Components/Form'
import { Chart } from './Components/Chart';
// import FetchData from './Helper/FetchData'
function App() {
  // interface IPeopleData {
  //   'household_ordinary_m':string,
  //    'household_ordinary_f': string,
  //   'household_single_f': string,
  //   'household_single_m': string,
  //   'household_ordinary_total': string,
  //   'household_single_total':string
  // }
  const [peopleData, setPeopleData] = useState({})
  const [selectData, setSelectData] = useState([])
  console.log("ppp", peopleData)
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
            <Form setPplData={setPeopleData} setSelectData={setSelectData}></Form>
            <div className="hr-with-text">
              <hr />
              <span>搜尋結果</span>
              <hr />
            </div>
            <div className='content__chart'>
              {selectData.length === 0 ? null : <h2 className='content__chartH2'>{selectData[0]}年 {selectData[1]}{selectData[2]}</h2>}
              {Object.keys(peopleData).length === 0 ? null : <Chart peopleData={peopleData} selectData={selectData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
