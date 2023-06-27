import React from 'react'
import Record from '../Interface/IRecord'


const FilterData = (allData: any, city: string, district: string) => {
  const targetObject = allData.filter((obj: Record) => obj.site_id === `${city}${district}`)
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
  return { 'household_ordinary_m': household_ordinary_m,    'household_ordinary_f': household_ordinary_f,
  'household_single_f':household_single_f,
  'household_single_m':household_single_m,
  'household_ordinary_total':household_ordinary_total,
  'household_single_total':household_single_total
}
}

export default FilterData;

