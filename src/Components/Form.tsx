import React, { useState, FC } from 'react'
import './Form.scss'
import axios from 'axios'
import { yeardata, citydata, districtdata } from '../Assets/Data'
// "proxy": "https://od.moi.gov.tw/api/v1/rest/datastore",
// 
export const Form: FC = () => {
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://od.moi.gov.tw/api/v1/rest/datastore';
  const gett = () => {
    //   fetch('https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-020')
    //     .then((result) => {
    //       console.log(result)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // }
    axios.get('https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-020')
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  // gett();
  const [year, setYear] = useState<string>('111');
  const [city, setCity] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(year,city,district)
  }
  const changeArea =async (e:string) => {
    await setCity(e);
    setDistrict(districtdata[e][0]);
  }
  return (
    <form onSubmit={handleSubmit}>

      <select value={year} onChange={(e) => setYear(e.target.value)}>
 
        {yeardata.map((data) => {
          return (
            <option key={data} value={data}>{data}</option>
          )
        })}
      </select>

      <select value={city} onChange={(e) => changeArea(e.target.value)}>
        <option value="" disabled hidden>請選擇 縣/市</option>
        {citydata.map((data: string) => {
          return (
            <option key={data} value={data}>{data}</option>
          )
        })}
      </select>
      <select value={district} onChange={(e) => setDistrict(e.target.value) }>
      {city? null: <option value="" disabled  hidden>請先選擇 縣/市</option>}
        {city?districtdata[city].map((data: string) => {
          return (
            <option key={data} value={data}>{data}</option>
          )
        }):null}
      </select>
      <button onClick={handleSubmit}  disabled={city === ''}
       className='submitBTN'>SUBMIT</button>
    </form>
  )
}
