import React from 'react';
import './App.scss';
import { Form } from './Components/Form'
function App() {
  return (
    <div className="App">
      <div className="navbar"></div>
      <div className='container'>
        <div className='brand'>
          <span className='brand__span'>TAIWAN</span>
        </div>
        <div className='content_container'>
          <div className='content'>
            <span >人口數、戶數按戶別及性別統計</span>
            <Form></Form>
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
