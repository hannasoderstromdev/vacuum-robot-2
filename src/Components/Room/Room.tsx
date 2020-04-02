import React from 'react'
import { useSelector } from 'react-redux'

import { selectCells } from '../../redux/cells/selectors'

import Cell from '../Cell'
import Robot from '../Robot'

import './room.css'

function Room(): JSX.Element {
  const cells = useSelector(selectCells)

  return (
    <ul className="cell-wrapper">
      {Object.entries(cells).map(([key, { isCleaned }]) => (
        <Cell key={key} id={key} isCleaned={isCleaned}>
          <Robot id={key} />
        </Cell>
      ))}
    </ul>
  )
}

export default Room
