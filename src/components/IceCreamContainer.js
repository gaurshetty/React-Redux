import React from 'react'
import { connect } from 'react-redux'
import { addIceCream, buyIceCream } from '../redux'

const IceCreamContainer = (props) => {
  return (
    <div>
      <h4>Number of IceCream: {props.numOfIceCreams}</h4>
      <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-primary me-2" type="button" onClick={props.addIceCream}>Add IceCream</button>
        <button className="btn btn-danger" type="button" onClick={props.buyIceCream}>Buy IceCream</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIceCream: () => dispatch(addIceCream()),
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
