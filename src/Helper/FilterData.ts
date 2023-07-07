import React from 'react'
import Record from '../Interface/IRecord'
interface FilterDataResult {
  household_ordinary_m: number;
  household_ordinary_f: number;
  household_single_f: number;
  household_single_m: number;
  household_ordinary_total: number;
  household_single_total: number;
}


const FilterData = (allData: any, city: string, district: string) => {
  const targetArray = allData.filter((obj: Record) => obj.site_id === `${city}${district}`)
  const initialValue: FilterDataResult = {
    household_ordinary_m: 0,
    household_ordinary_f: 0,
    household_single_f: 0,
    household_single_m: 0,
    household_ordinary_total: 0,
    household_single_total: 0
  };
  const result = targetArray.reduce((accumulator: FilterDataResult, data: Record) => {
    return {
      household_ordinary_m: accumulator.household_ordinary_m + Number(data["household_ordinary_m"]),
      household_ordinary_f: accumulator.household_ordinary_f + Number(data["household_ordinary_f"]),
      household_single_f: accumulator.household_single_f + Number(data["household_single_f"]),
      household_single_m: accumulator.household_single_m + Number(data["household_single_m"]),
      household_ordinary_total: accumulator.household_ordinary_total + Number(data["household_ordinary_total"]),
      household_single_total: accumulator.household_single_total + Number(data["household_single_total"])
    };
  }, initialValue);

  return result;
}

export default FilterData;

