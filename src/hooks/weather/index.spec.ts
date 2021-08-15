import { renderHook } from '@testing-library/react-hooks/native'
import { useWeatherApi, CITY_CODES } from './'

import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
configure({ adapter: new Adapter() })

describe('Hooks Weather', () => {
  it('loading', () => {
    const { result } = renderHook(() => useWeatherApi(CITY_CODES[0].value))
    const status = result.current.status
    expect(status).equal('LOADING')
  })
})
