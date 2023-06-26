import React from 'react'

interface Record {
  statistic_yyy: string;
  site_id: string;
  village: string;
  household_ordinary_total: string;
  household_business_total: string;
  household_single_total: string;
  household_ordinary_m: string;
  household_business_m: string;
  household_single_m: string;
  household_ordinary_f: string;
  household_business_f: string;
  household_single_f: string;
}

const FilterData = (allData: any, city: string, district: string) => {
  console.log('FillterData', `${city}${district}`)
  const targetObject = allData.filter((obj: Record) => obj.site_id === `${city}${district}`)
  console.log('targetObject', targetObject)
  let household_ordinary_f = 0;
  let household_ordinary_m = 0;
  let household_single_f = 0;
  let household_single_m = 0;
  let household_ordinary_total = 0;
  let household_single_total = 0;

  for (let data of targetObject) {
    household_ordinary_m += Number(data["household_ordinary_m"])
    household_ordinary_f += Number(data["household_ordinary_f"])
    household_single_f += Number(data["household_single_f"])
    household_single_m += Number(data["household_single_m"])
    household_ordinary_total += Number(data["household_ordinary_total"])
    household_single_total += Number(data["household_single_total"])
  }
  console.log('household_ordinary_m', household_ordinary_m)

  return { 'household_ordinary_m': household_ordinary_m, 'household_ordinary_f': household_ordinary_f,
  'household_single_f':household_single_f,
  'household_single_m':household_single_m,
  'household_ordinary_total':household_ordinary_total,
  'household_single_total':household_single_total
}
}

export default FilterData;

