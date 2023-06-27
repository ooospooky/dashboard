import React, { useState,useCallback } from 'react'
import axios from 'axios'

interface IYearSelect {
  [key:string] : string
}
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

const FetchData=(year:string) =>{
  console.log("YYER",year)
  return( axios.get(YearSelector[year])
    .then((result) => {
      return result.data.result.records;
    })
    .catch((error) => {
      console.log(error)
    })
  )
}

export default FetchData
