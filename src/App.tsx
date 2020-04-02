import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { move } from './redux/robot/actions'
import { CellsActions } from './redux/cells/actions'

import { selectNumberOfCellsCleaned } from './redux/cells/selectors'
import { Headings } from './redux/robot/type'

import Room from './Components/Room'

import './app.css'

export function getRandomHeading() {
  const availableHeadings = [
    Headings.N, 
    Headings.E, 
    Headings.S, 
    Headings.W
  ]

  const randomIndex = Math.round(Math.random() * 3)

  return availableHeadings[randomIndex]
}

export function getRandomCoordinates() {
  const y = Math.round(Math.random() * 9)
  const x = Math.round(Math.random() * 9)
  return { x, y }
}

export function msToMinutesAndSeconds(ms: number) {
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000)
  
  const zeroOrNothing = seconds < 10 ? '0' : ''
  
  return seconds.toFixed(0) === '60'
    ? `${minutes < 10 ? '0' : ''}${minutes + 1}:00`
    : `${minutes < 10 ? '0' : ''}${minutes}:${zeroOrNothing}${seconds.toFixed(0)}`
}


function App(): JSX.Element {
  const [timeSpent, setTimeSpent] = useState(0)

  const numberOfCellsCleaned = useSelector(selectNumberOfCellsCleaned)

  const dispatch = useDispatch()

  const moveRobot = useCallback(() => {
    const heading = getRandomHeading()

    dispatch(move({ heading: heading }))
  }, [dispatch])
 
  const runOnInterval = useCallback(() => {
    if (numberOfCellsCleaned < 100) {
      moveRobot()
      setTimeSpent(state => state + 500)
    }
  }, [numberOfCellsCleaned, moveRobot])
 
  useEffect(() => {
    const interval = setInterval(() => {
      runOnInterval()
    }, 500)
    return () => clearInterval(interval)
  }, [runOnInterval, moveRobot])

  function onReset() {
    // reset robot and cleaned cells
    setTimeSpent(0)
    dispatch(CellsActions.resetCells())
  }

  if (numberOfCellsCleaned === 100) {
    return (
      <div className="app">
        <h1>Cleaning complete in {msToMinutesAndSeconds(timeSpent)}</h1>
      </div>
    )
  } else {
    return (
      <div className="app">
        <h1>Cleaning Robot</h1>
        <Room />

        <button className="reset-button" onClick={onReset}>
          Reset
        </button>
        <div className="meta">
          <div>Time spent: {msToMinutesAndSeconds(timeSpent)}</div>
          <div>Cells cleaned: {numberOfCellsCleaned}/100</div>
        </div>
      </div>
    )
  }
}

export default App;
