import React, { FC } from 'react'
import { babyProps, sizeDisplay } from '../babyTypes'
import sizesByWeek, { getValByWeekSize } from './sizesByWeek'
import comparisonObjects, { getValByCompType } from './comparisonObjects'

const getSizeDiv: FC<sizeDisplay> = ({ week, size, bMetric }) => {
  return (
    <div>
      An average baby at week {week} is: <br />
      Weight: { bMetric ? `${size.weightGrams} g` : `${size.weightGrams * 0.00220462} lb` } <br />
      Length: { bMetric ? `${size.lengthCm} cm` : `${size.lengthCm * 0.393701} inches` } <br />
      Volume: { bMetric ? `${size.volumeMl} ml` : `${size.volumeMl * 0.00211338} pints` } <br />
    </div>
  )
}

// want to add comparison metric, is the value we want to favor, mass, length, volume?
const getBabySizeDiv: FC<babyProps> = ({ weeks, comparisonType, priority }) => {
  // get week stats for mass/length/volume
  // check nearest options
  // filter list by tag, sort by priority, then find nearest match.

  const matchedTypes = comparisonObjects.filter((val) => {
    return val.objectTypeLabel === comparisonType
  })

  matchedTypes.sort((a, b) => getValByCompType(a, priority) - getValByCompType(b, priority))

  let index = 0
  let displayVal: string = ''
  while (index < matchedTypes.length && getValByCompType(matchedTypes[index], priority) < getValByWeekSize(sizesByWeek[weeks], priority)) {
    index++
  }
  if (index === matchedTypes.length) {
    displayVal = `Nothing in our data is as large as your baby but the closest match is ${matchedTypes[index - 1].objectName}`
  } else if (index > 0) {
    displayVal = `Somewhere between a ${matchedTypes[index - 1].objectName} and a ${matchedTypes[index].objectName}`
  } else if (matchedTypes.length === 0) {
    displayVal = `Theres an issue finding any matches for this type: ${comparisonType}`
  } else {
    displayVal = `We don't have a good estimate in this category for that time but the closest datapoint is a ${matchedTypes[index].objectName}`
  }

  return (
    <div>
      { getSizeDiv({ week: weeks, size: sizesByWeek[weeks], bMetric: true }) }
      { `Your Baby is ${comparisonType}ly: ${displayVal}` }
    </div>
  )
}

export const getPriorityOptions = (): string[] => {
  return ['Weight', 'Length', 'Volume']
}

/*
getBabySizeRaw(weeks, comparisonType)
return all the info for that , update other formats to use this once some logic and formatting is in place in now div func
getBabySizeComparisonDiv(babyProps1, babyProps2)
*/

export default getBabySizeDiv
