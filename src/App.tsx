import React from 'react'
import Weather from './components/weather'
import CitySelector from './components/citySelector'
import { CityCode, useWeatherApi } from './hooks/weather'

const App: React.FC = () => {
  const [cityCode, setCityCode] = React.useState(101010100 as CityCode)
  const apiResult = useWeatherApi(cityCode)
  return (
        <div>
            <CitySelector onChangeCityCode={setCityCode} disabled={apiResult.status === 'LOADING'}/>
            <Weather apiResult={apiResult}/>
        </div>
  )
}

export default App
