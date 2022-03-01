import { connect } from 'react-redux'
import { updateCounter } from '../containers/App/action'

function CounterBox(props) {
  return <p style={{ color: 'white' }}>{props.counter}</p>
}

const mapStateToProps = state => {
  return {
    counter: state.app.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCounter: counter => dispatch(updateCounter(counter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterBox)
