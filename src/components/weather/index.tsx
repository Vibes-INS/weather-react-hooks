import React from 'react'
import { UseWeatherApiReturn, WeatherInfo } from '../../hooks/weather'

interface WeatherProps {
    apiResult: UseWeatherApiReturn
}

const Weather: React.FC<WeatherProps> = ({ apiResult }) => {
  const weatherInfo = apiResult.data?.weatherinfo as WeatherInfo
  switch (apiResult.status) {
    case 'LOADING':
      return (
        <div>
            Loading
        </div>
      )
    case 'SUCCEEDED':
      return (
          <div>
              {weatherInfo.city} {weatherInfo.weather} 最低气温 {weatherInfo.temp1} 最高气温 {weatherInfo.temp2}
          </div>
      )
    case 'FAILED':
      return (
          <div>
              Failed
          </div>
      )
    default:
      throw new Error('意外错误')
  }
}

export default Weather
