import React, { FC } from 'react'
import { babyProps } from './babyTypes'
import sizesByWeek, { getBabySizeField } from './sizesByWeek'

const getBabySizeDiv: FC<babyProps> = ({ weeks, comparisonType }) => {
  const message = `Your Baby is ${comparisonType}ly: `
  let size: string = '100 microns in diameter'

  let match = sizesByWeek.filter((val, index) => {
    return getBabySizeField(val, comparisonType) !== '' &&
    val.Week === weeks
  })

  if (match.length === 1) {
    size = getBabySizeField(match[0], comparisonType)
  } else if (match.length > 1) {
    console.log('Should be an unreachable block. Please debug what is broken?')
  } else {
    // found no matches with exact search, so give range
    match = sizesByWeek.filter((val, index) => {
      return getBabySizeField(val, comparisonType) !== ''
    })
    // match now contains all the values for this comparison type, want to find bounding items,
    // only 40 items in the list, doing linear search
    let index = 0
    while (index < match.length && match[index].Week < weeks) {
      index++
    }
    console.log(match)
    console.log(index)
    if (index > 0) {
      size = `Somewhere between a ${getBabySizeField(match[index - 1], comparisonType)} and` +
      ` a ${getBabySizeField(match[index], comparisonType)}`
    } else {
      size = `We don't have a good estimate in this category for that time but the closest datapoint is a ${getBabySizeField(match[index], comparisonType)}`
    }
  }

  return (
    <div>
      { message + size }
    </div>
  )
}

export const getComparisonTypes = (): string[] => {
  // get keys or field list in comparison types object
  // exclude first value (special case of weeks exists as index not comparison type)
  return Object.keys(sizesByWeek[0]).slice(1)
}

/*
getBabySizeRaw(weeks, comparisonType)
return all the info for that , update other formats to use this once some logic and formatting is in place in now div func
getBabySizeComparisonDiv(babyProps1, babyProps2)
*/

export default getBabySizeDiv
