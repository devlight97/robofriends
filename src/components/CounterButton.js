import { connect } from 'react-redux'
import { updateCounter } from '../containers/App/action'

function CounterButton(props) {
  return <button onClick={() => props.updateCounter(props.counter + 1)}>Plus</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton)
