import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addIceCream, buyIceCream } from '../redux'

function InputIceCreamContainer (props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h4>Number of IceCream: {props.numOfIceCreams} </h4>
      <div className="row g-3">
        <div class="col-auto">
          <input className='form-control me-2' style={{width: "80px"}} type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        </div>
        <div class="col-auto">
          <button className='btn btn-primary me-2' onClick={() => props.addIceCream(number)}>Add IceCream</button>
        </div>
        <div class="col-auto">
          <button className='btn btn-danger' onClick={() => props.buyIceCream(number)}>Buy IceCream</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addIceCream: number => dispatch(addIceCream(number)),
    buyIceCream: number => dispatch(buyIceCream(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputIceCreamContainer)
