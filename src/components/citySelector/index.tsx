import React from 'react'
import { CITY_CODES, CityCode } from '../../hooks/weather'

export interface CitySelectorProps {
    onChangeCityCode: (cityCode: CityCode) => void
    disabled?: boolean
}

const CitySelector: React.FC<CitySelectorProps> = (props) => {
  return (
      <select
          onChange={(e) => props.onChangeCityCode(Number(e.currentTarget.value) as CityCode)}
          disabled={Boolean(props?.disabled)}>
          {
              CITY_CODES.map(item => <option key={item.value} value={item.value}>{item.label}</option>)
          }
      </select>
  )
}

export default CitySelector
