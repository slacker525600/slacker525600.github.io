import React, { FC } from 'react'
import { babyProps, sizeDisplay } from '../babyTypes'
import sizesByWeek, { getValByWeekSize } from './sizesByWeek'
import comparisonObjects, { getValByCompType } from './comparisonObjects'

const SizeDiv: FC<sizeDisplay> = ({ week, size, bMetric }) => {
  return (
    <div>
      An average baby at week {week} is: <br />
      Weight: { bMetric ? `${size.weightGrams} g` : `${size.weightGrams * 0.00220462} lb` } <br />
      Length: { bMetric ? `${size.lengthCm} cm` : `${size.lengthCm * 0.393701} inches` } <br />
      Volume: { bMetric ? `${size.volumeMl} ml` : `${size.volumeMl * 0.00211338} pints` } <br />
    </div>
  )
}

const BabySizeDiv: FC<babyProps> = ({ weeks, comparisonType, priority }) => {
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
      <SizeDiv week={weeks} size={sizesByWeek[weeks]} bMetric={false} />
      <br/>
      { `In an ${comparisonType}-ly sense your Baby is: ${displayVal}` }
    </div>
  )
}

export const getPriorityOptions = (): string[] => {
  return ['Weight', 'Length'] //, 'Volume'] // want to add volume but presently data is bad
}

/*
next steps are updating info about sizes of things and allowing comparisons between two
getBabySizeComparisonDiv(babyProps1, babyProps2)
*/

export default BabySizeDiv
