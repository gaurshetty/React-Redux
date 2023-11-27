import React from 'react'
import { connect } from 'react-redux'
import { addCake, buyCake, addIceCream, buyIceCream } from '../redux'

function ItemContainer (props) {
  return (
    <div className='row g-3 mt-1'>
      <div className='col-auto'>
        <h4>{props.cake?'Cake':'IceCream'}: {props.item}</h4>
      </div>
      <div className='col-auto'>
        <button className="btn btn-primary btn-sm" type="button" onClick={props.addItem}>Add Item</button>
      </div>
      <div className='col-auto'>
        <button className="btn btn-danger btn-sm" type="button" onClick={props.buyItem}>Buy Item</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchAdd = ownProps.cake
    ? () => dispatch(addCake())
    : () => dispatch(addIceCream())
  const dispatchBuy = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
  return {
    addItem: dispatchAdd,
    buyItem: dispatchBuy
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
