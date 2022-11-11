import React, { FC } from 'react'
import FooterLinks from './footerLinks'

/*
Current idea is to provide an easy to use baby size comparison application.
lets start with on/off,
then move to days since fertilization yielding mass
then move to all the other things (types/weightvslength/)
then worry about UX of interaction of above ... ratios lulz

lets do this with hooks ...
, useEffect, useState

export interface BabyProp {
  // noted above path forward, starting with on/off bool and number
  days: number
};
*/

const BabyInputs: FC = () => {
  return (
    <form >
      <label htmlFor="comparisonType" > Choose a comparison type:</label>
      <select id="comparisonType" name="comparisonType">
        <option value="Literal">Literal</option>
      </select>
      <br />
      <label htmlFor="days">Days since conception:</label>
      <input type='number' id='days' ></input>
    </form>
  )
}

const Baby: FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <div className="title">
            The lazy dev
        </div>
      </div>
      <div className="main-block">
        <div className='content'>
          <div className='image'>

          </div>
        </div>
        <div className='inputs'>
          <div className='message'>
            Please adjust these inputs to specify the size of your baby and the app will attempt to find a suitable comparison.
          </div>
          <br />
          <BabyInputs />
        </div>
      </div>

     <FooterLinks />

    </div>
  )
}

export default Baby
