import React from 'react';
import './App.scss';
import { Form } from './Components/Form'
function App() {
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
