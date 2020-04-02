import {
  getRandomHeading,
  getRandomCoordinates,
  msToMinutesAndSeconds,
} from './App'
import { Headings } from './redux/robot/type'

describe('App', () => {
  describe('getRandomHeading', () => {
    it('returns a random heading', () => {
      const headings = [Headings.N, Headings.E, Headings.S, Headings.W]
      const heading = getRandomHeading()
      expect(headings.includes(heading)).toEqual(true)
    })
  })
  describe('getRandomCoordinates', () => {
    it('returns random coordinates', () => {
      const coordinates = getRandomCoordinates()
      expect(coordinates.x <= 9 && coordinates.x >= 0).toEqual(true)
      expect(coordinates.y <= 9 && coordinates.y >= 0).toEqual(true)
    })
  })
  describe('msToMinutesAndSeconds', () => {
    it('returns seconds and minutes in correct format', () => {
      expect(msToMinutesAndSeconds(121000)).toEqual('02:01')
      expect(msToMinutesAndSeconds(1235000)).toEqual('20:35')
    })
  })
})
