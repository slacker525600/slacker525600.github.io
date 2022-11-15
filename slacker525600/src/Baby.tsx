import React, { ChangeEvent, FC, useState } from 'react'
import FooterLinks from './footerLinks'

/*
Current idea is to provide an easy to use baby size comparison application.
then move to weeks since fertilization yielding mass
then move to all the other things (types/weightvslength/)
then worry about UX of interaction of above ... ratios lulz
*/

const grams = [0.00075,
  0.0015,
  0.00307,
  0.06125,
  0.125,
  0.25,
  0.5,
  1,
  2,
  4,
  7,
  14,
  23,
  43,
  70,
  100,
  140,
  190,
  240,
  300,
  360,
  430,
  500,
  600,
  660,
  760,
  875,
  1000,
  1150,
  1320,
  1500,
  1700,
  1920,
  2150,
  2380,
  2620,
  2860,
  3080,
  3290,
  3460,
  3600,
  3690
]

// this function will be moved to a separate file as logic grows
const getBabySize = (weeks: number, comparisonType: string): string => {
  const message = `Your Baby is ${comparisonType}ly: `
  let size: string = ''
  if (weeks > 0) {
    size = String(grams[weeks]) + ' grams '
  } else {
    size = '100 microns in diameter'
  }
  return message + size
}

interface babyProps {
  weeks: number
  comparisonType: string
}
interface babyInputProps extends babyProps {
  weeksSetter: (event: ChangeEvent<HTMLInputElement>) => void
  comparisonTypeSetter: (event: ChangeEvent<HTMLSelectElement>) => void
}

const BabyOutputs: FC<babyProps> = ({ weeks, comparisonType }) => {
  return (
    <div>
      At {weeks} weeks... <br />
      {getBabySize(weeks, comparisonType)}
    </div>
  )
}

const BabyInputs: FC<babyInputProps> = ({ weeks, weeksSetter, comparisonType, comparisonTypeSetter }) => {
  return (
    <form >
      <label htmlFor="comparisonType" > Choose a comparison type: </label>
      <select id="comparisonType" name="comparisonType" value={comparisonType} onChange={comparisonTypeSetter}>
        <option value='Literal' >Literal</option>
      </select>
      <br />
      <label htmlFor="weeks">Weeks since conception:</label>
      <input type='number' id='weeks' value={weeks} onChange={weeksSetter}></input>
    </form>
  )
}

const Baby: FC = () => {
  const [weeks, setWeeks] = useState(0)
  const [comparisonType, setComparisonType] = useState('Literal')

  const handleWeeksChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const weeksVal: number = +event.currentTarget.value
    setWeeks(weeksVal)
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
            <BabyOutputs weeks={weeks} comparisonType={comparisonType} />
          </div>
        </div>
        <div className='inputs'>
          <div className='message'>
            Please adjust these inputs to specify the size of your baby and the app will attempt to find a suitable comparison.
          </div>
          <br />
          <BabyInputs
            weeks={weeks}
            weeksSetter={handleWeeksChange}
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
