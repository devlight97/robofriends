import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import ErrorBoundry from '../../components/ErrorBoundry';
import CounterBox from '../../components/CounterBox';
import CounterButton from '../../components/CounterButton';
// import ErrorBoundry from '@components/ErrorBoundry';
import './App.css';

export const AppContext = React.createContext({ searchfield: '' })

function App() {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  useEffect(async () => {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    setRobots(users)
  }, [])

  const onSearchChange = evt => setSearchfield(evt.target.value)

  const filteredRobots = robots
    .filter(robot => robot.name.toLowerCase().match(`^${searchfield.toLowerCase()}`))

  return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <CounterBox />
        <CounterButton />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <AppContext.Provider value={{ searchfield }}>
              <CardList robots={filteredRobots} />
            </AppContext.Provider>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    counter: state.app.counter
  }
}

export default connect(mapStateToProps)(App);