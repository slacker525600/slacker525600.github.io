import React, { ChangeEvent, FC, useState } from 'react'
import FooterLinks from './footerLinks'

/*
Current idea is to provide an easy to use baby size comparison application.
then move to days since fertilization yielding mass
then move to all the other things (types/weightvslength/)
then worry about UX of interaction of above ... ratios lulz
*/

// this function will be moved to a separate file as logic grows
const getBabySize = (days: Number): String => {
  if (days > 0) {
    return String(days)
  }
  return '100 microns in diameter'
}

interface babyProps {
  days: number
  comparisonType: string
}
interface babyInputProps extends babyProps {
  daysSetter: (event: ChangeEvent<HTMLInputElement>) => void
  comparisonTypeSetter: (event: ChangeEvent<HTMLSelectElement>) => void
}

const BabyOutputs: FC<babyProps> = ({ days }) => {
  return (
    <div>
      Hard coding {days} days literal response.
      {getBabySize(days)}
    </div>
  )
}

const BabyInputs: FC<babyInputProps> = ({ days, daysSetter, comparisonType, comparisonTypeSetter }) => {
  return (
    <form >
      <label htmlFor="comparisonType" > Choose a comparison type: </label>
      <select id="comparisonType" name="comparisonType" value={comparisonType} onChange={comparisonTypeSetter}>
        <option value='Literal' >Literal</option>
      </select>
      <br />
      <label htmlFor="days">Days since conception:</label>
      <input type='number' id='days' value={days} onChange={daysSetter}></input>
    </form>
  )
}

const Baby: FC = () => {
  const [days, setDays] = useState(0)
  const [comparisonType, setComparisonType] = useState('Literal')

  const handleDaysChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const daysVal: number = +event.currentTarget.value
    setDays(daysVal)
  }

  const handleComparisonTypeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setComparisonType(event.currentTarget.value)
  }

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
            <BabyOutputs days={days} comparisonType={comparisonType} />
          </div>
        </div>
        <div className='inputs'>
          <div className='message'>
            Please adjust these inputs to specify the size of your baby and the app will attempt to find a suitable comparison.
          </div>
          <br />
          <BabyInputs
            days={days}
            daysSetter={handleDaysChange}
            comparisonType={comparisonType}
            comparisonTypeSetter={handleComparisonTypeChange}
          />
        </div>
      </div>

     <FooterLinks />

    </div>
  )
}

export default Baby
