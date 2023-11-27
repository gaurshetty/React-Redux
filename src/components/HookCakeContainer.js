import React from 'react'
import { addCake, buyCake } from '../redux'
import { useDispatch, useSelector } from 'react-redux'

const CakeContainer = (props) => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h4>Number of cakes: {numOfCakes}</h4>
      <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-primary me-2" type="button" onClick={() => dispatch(addCake())}>Add Cake</button>
        <button className="btn btn-danger" type="button" onClick={() => dispatch(buyCake())}>Buy Cake</button>
      </div>
    </div>
  )
}

export default CakeContainer
