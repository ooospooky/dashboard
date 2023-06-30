import React, { useState,useCallback } from 'react'
import axios from 'axios'

interface IYearSelect {
  [key:string] : string
}
/*   Doc上的舊API，會遇到cors問題  https://data.gov.tw/dataset/14299
const YearSelector:IYearSelect = {
  '111' : 'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-053',
  '110' : 'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-049',
  '109' : 'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-045',
  '108' : 'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-041',
  '107' : '	https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-033',
  '106' : 'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-020',
  '105' : '	https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-008',
  '104' : 'https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-004'
}
*/
/*
  Doc更新，使用使API
  https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/yyy(請指定年)
  可避免cors
*/
const FetchData=(year:string) =>{
  let  allData:object[]= [];
    return( axios.get(`https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}`)
    .then(async(result) => {
      allData = [...result.data.responseData]
      for(let page = 2; page<=Number(result.data.totalPage); page++){
        const pageData = await FetchPageData(year,page)
        allData = [...allData,...pageData]
      }
      return allData;
    })
    .catch((error) => {
      console.log(error)
    })
  )
}

const FetchPageData = async (year:string,page:number)=>{
    const res = await axios.get(`https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}?page=${page}`)
    return res.data.responseData
}

export default FetchData
