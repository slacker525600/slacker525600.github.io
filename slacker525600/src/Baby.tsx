import React, { ChangeEvent, FC, useState } from 'react'
import { babyInputProps, babyProps } from './babyTypes'
import FooterLinks from './footerLinks'
import getBabySizeDiv, { getComparisonTypes } from './sizeLogic'

/*
Current idea is to provide an easy to use baby size comparison application.
then move to weeks since fertilization yielding mass
then move to all the other things (types/weightvslength/)
then worry about UX of interaction of above ... ratios lulz
*/

const BabyOutputs: FC<babyProps> = ({ weeks, comparisonType }) => {
  return (
    <div>
      At {weeks} weeks... <br />
      {getBabySizeDiv({ weeks, comparisonType })}
    </div>
  )
}

const BabyInputs: FC<babyInputProps> = ({ weeks, weeksSetter, comparisonType, comparisonTypeSetter }) => {
  return (
    <form >
      <label htmlFor="comparisonType" > Choose a comparison type: </label>
      <select id="comparisonType" name="comparisonType" value={comparisonType} onChange={comparisonTypeSetter}>
        {
          getComparisonTypes().map((comparisonType) => {
            return <option value={comparisonType} key={comparisonType} >{comparisonType}</option>
          })
        }
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
