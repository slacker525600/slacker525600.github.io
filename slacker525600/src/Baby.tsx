import React, { ChangeEvent, FC, useState } from 'react'
import { babyInputProps, babyProps } from './babyTypes'
import FooterLinks from './footerLinks'
import getBabySizeDiv, { getPriorityOptions } from './size_logic/sizeLogic'
import { getComparisonTypes } from './size_logic/comparisonObjects'

/*
Current idea is to provide an easy to use baby size comparison application.
then move to weeks since fertilization yielding mass
then move to all the other things (types/weightvslength/)
then worry about UX of interaction of above ... ratios lulz
*/

const BabyOutputs: FC<babyProps> = ({ weeks, comparisonType, priority }) => {
  return (
    <div>
      At {weeks} weeks... <br />
      {getBabySizeDiv({ weeks, comparisonType, priority })}
    </div>
  )
}

const BabyInputs: FC<babyInputProps> = (
  {
    weeks,
    weeksSetter,
    comparisonType,
    comparisonTypeSetter,
    priority,
    prioritySetter
  }) => (
    <form >
      <label htmlFor="comparisonType" > Choose a comparison type: </label>
      <select id="comparisonType" name="comparisonType" value={comparisonType} onChange={comparisonTypeSetter}>
        {
          getComparisonTypes().map((comparisonType: string) => {
            return <option value={comparisonType} key={comparisonType} >{comparisonType}</option>
          })
        }
      </select>
      <br />
      <label htmlFor="weeks">Weeks since conception:</label>
      <input type='number' id='weeks' value={weeks} onChange={weeksSetter}></input>
      <label htmlFor="priority">Size Priority:</label>
      <select id="priority" name="priority" value={priority} onChange={prioritySetter}>
        {
          getPriorityOptions().map((priority) => {
            return <option value={priority} key={priority} >{priority}</option>
          })
        }
      </select>
    </form>
)

const Baby: FC = () => {
  const [weeks, setWeeks] = useState(1)
  const [comparisonType, setComparisonType] = useState('Goth')
  const [priority, setPriority] = useState('Weight')

  const handleWeeksChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const weeksVal: number = +event.currentTarget.value > 0 ? +event.currentTarget.value : 1
    setWeeks(weeksVal)
  }

  const handleComparisonTypeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setComparisonType(event.currentTarget.value)
  }

  const handlePriorityChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setPriority(event.currentTarget.value)
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
            <BabyOutputs weeks={weeks} comparisonType={comparisonType} priority={priority} />
          </div>
        </div>
        <div className='messagebox'>
          <div className='message'>
            Please adjust these inputs to specify the size of your baby and the app will attempt to find a suitable comparison.
          </div>
          <br />
          <BabyInputs
            weeks={weeks}
            weeksSetter={handleWeeksChange}
            comparisonType={comparisonType}
            comparisonTypeSetter={handleComparisonTypeChange}
            priority={priority}
            prioritySetter={handlePriorityChange}
          />
        </div>
      </div>

     <FooterLinks />

    </div>
  )
}

export default Baby
