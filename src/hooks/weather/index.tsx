import { useEffect, useState } from 'react'

export const CITY_CODES = [
  {
    label: '北京',
    value: 101010100
  },
  {
    label: '上海',
    value: 101020100
  },
  {
    label: '广州',
    value: 101280101
  },
  {
    label: '深圳',
    value: 101280601
  }
] as const

export type City = typeof CITY_CODES[number]['label']
export type CityCode = typeof CITY_CODES[number]['value']
export type Status = 'LOADING' | 'SUCCEEDED' | 'FAILED'

export interface WeatherInfo {
    city: string
    cityid: string
    temp1: string
    temp2: string
    weather: string
    img1: string
    img2: string
    ptime: string
}

export interface Result {
    weatherinfo: WeatherInfo
}

function getApiUrl (cityCode: CityCode) {
  return `/data/cityinfo/${cityCode}.html`
}

export function useWeatherApi (cityCode: CityCode) {
  const [status, setStatus] = useState('LOADING' as Status)
  const [data, setData] = useState(undefined as (Result | undefined))
  const [error, setError] = useState(undefined as any)

  useEffect(() => {
    const url = getApiUrl(cityCode)
    setStatus('LOADING')
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Api Error: ' + response.status)
        }
        return response.json()
      })
      .then((res: Result) => {
        setData(res)
        setStatus('SUCCEEDED')
      }).catch(err => {
        setStatus('FAILED')
        setError(err)
      })
  }, [cityCode])

  return {
    status,
    data,
    error
  }
}

export type UseWeatherApiReturn = ReturnType<typeof useWeatherApi>
