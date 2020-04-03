import React from 'react';
import { useSelector } from 'react-redux';

import { selectRobot } from '../../redux/robot/selectors';

import './robot.css';

type RobotProps = {
  id: string;
};

function Robot({ id }: RobotProps) {
  const { x, y } = useSelector(selectRobot);

  function isVisible() {
    return id === `x${x}y${y}`;
  }

  return isVisible() ? (
    <div className="robot" data-testid="robot">
      <span>O</span>
    </div>
  ) : null;
}

export default Robot;
