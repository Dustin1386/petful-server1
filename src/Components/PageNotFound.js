import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound () {
  return (
    <>
      <header>
        <h1>Dustys Lil Shop of Pets</h1>
      </header>
      <h2>Are you lost?</h2>
      <p>Looks like your url doesn't match any of our pages. Try going back, or click <Link to='/'>here</Link> to go home.</p>
    </>
  )
}