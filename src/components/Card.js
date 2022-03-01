import React, { useContext } from 'react';
import { AppContext } from '../containers/App'

const Card = ({ name, email, id }) => {
  const { searchfield } = useContext(AppContext)

  console.log(name.slice(0, searchfield.length - 1));
  console.log(searchfield.length);
  const nameTag = () => (
    <h2>
      {searchfield.length === 0 ? name : <mark>{name.slice(0, searchfield.length)}</mark>}
      {name.slice(searchfield.length)}
    </h2>
  )
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        {nameTag()}
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
