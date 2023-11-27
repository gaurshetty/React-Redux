import React from 'react'
import { connect } from 'react-redux';
import { addCake, buyCake } from '../redux'

const CakeContainer = (props) => {
  return (
    <div>
      <h4>Number of cakes: {props.numOfCakes}</h4>
      <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-primary me-2" type="button" onClick={props.addCake}>Add Cake</button>
        <button className="btn btn-danger" type="button" onClick={props.buyCake}>Buy Cake</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCake: () => dispatch(addCake()),
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer) 
