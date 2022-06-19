import Button from 'react-bootstrap/Button';
import React from 'react'
import { useDispatch } from 'react-redux';
import { actionDecrementarSync, actionIncrementarSync, actionResetSync } from '../redux/actions/ActionsCounter';

const Counter = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter:</h1>
      <Button onClick={()=>{dispatch(actionIncrementarSync(1))}}>+1</Button>
      <Button onClick={()=>{dispatch(actionDecrementarSync(1))}}>-1</Button>
      <Button onClick={()=>{dispatch(actionResetSync(0))}}>Reset</Button>

    </div>
  )
}

export default Counter