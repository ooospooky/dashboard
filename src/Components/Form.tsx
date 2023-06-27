import React, { useState, useCallback,useEffect, FC } from 'react'
import './Form.scss'
import axios from 'axios'
import { yeardata, citydata, districtdata } from '../Assets/Data'
import FetchData from '../Helper/FetchData'
import FilterData from '../Helper/FilterData'
interface IFormProps {
  setPplData: (data: any) => void;
  setSelectData: (data: any) => void;
  setDidsubmit: (data: any) => void;
}
enum YearSelector {
  Year111 = 'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-053',
  Year110 = 'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-049'
}

export const Form: FC<IFormProps> = ({ setPplData, setSelectData, setDidsubmit }) => {
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://od.moi.gov.tw/api/v1/rest/datastore';
  const [year, setYear] = useState<string>('111');
  const [city, setCity] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  
  const pattern = /^\/\d{3}\/[\u4e00-\u9fa5]{3}\/[\u4e00-\u9fa5]{3}$/; 
  const path = decodeURIComponent(window.location.pathname)
  useEffect(() => {
    const urlFetch = async () => {
      if (pattern.test(path)) {
        setDidsubmit(true)
        const pathData = path.split("/").filter(Boolean);
        setYear(pathData[0])
        setCity(pathData[1])
        setDistrict(pathData[2])
        
        const allData = await FetchData(pathData[0])
        const doneData = await FilterData(allData, pathData[1], pathData[2]);
        setPplData(doneData);
        setSelectData([pathData[0], pathData[1], pathData[2]]);
      }
    }
    urlFetch();
  }, []);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSelectData([])
    setPplData({})
    setDidsubmit(false)
    setDidsubmit(true)
    const allData = await FetchData(year)
    const doneData = await FilterData(allData, city, district);
    setPplData(doneData);
    setSelectData([year, city, district]);
  }
  const changeArea = async (e: string) => {
    await setCity(e);
    setDistrict(districtdata[e][0]);
  }
  return (
    <form className='dashboardForm' onSubmit={handleSubmit}>

      <select className='dashboardForm__selectYear' value={year} onChange={(e) => setYear(e.target.value)}>

        {yeardata.map((data) => {
          return (
            <option key={data} value={data}>{data}</option>
          )
        })}
      </select>

      <select className='dashboardForm__select dashboardForm__selectcityNdistrict'
        value={city} onChange={(e) => changeArea(e.target.value)}
        style={city === '' ? { color: '#B6B6B6' } : { color: 'black' }} >
        <option value="" disabled hidden >請選擇 縣/市</option>
        {citydata.map((data: string) => {
          return (
            <option key={data} value={data}>{data}</option>
          )
        })}
      </select>
      <select
        className='dashboardForm__select dashboardForm__selectcityNdistrict'
        value={district} onChange={(e) => setDistrict(e.target.value)} style={city === '' ? { color: '#B6B6B6' } : { color: 'black' }}>
        {city ? null : <option value="" disabled hidden>請先選擇 縣/市</option>}
        {city ? districtdata[city].map((data: string) => {
          return (
            <option key={data} value={data}>{data}</option>
          )
        }) : null}
      </select>
      <button onClick={handleSubmit} disabled={city === ''}
        className='submitBTN'>SUBMIT</button>
    </form>
  )
}
