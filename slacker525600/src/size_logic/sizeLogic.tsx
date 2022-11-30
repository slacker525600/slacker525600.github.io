import React, { FC } from 'react'
import { babyProps, sizeDisplay } from '../babyTypes'
import sizesByWeek, { babySizes, getBabySizeField } from './sizesByWeek'

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

  const size = sizesByWeek.filter((val, index) => {
    return getBabySizeField(val, comparisonType) !== '' &&
    val.Week === weeks
  })

  //  if (match.length === 1) {
  //    size = getBabySizeField(match[0], comparisonType)
  //  } else if (match.length > 1) {
  //    console.log('Should be an unreachable block. Please debug what is broken?')
  //  } else {
  //    // found no matches with exact search, so given options with data
  //    match = sizesByWeek.filter((val, index) => {
  //      return getBabySizeField(val, comparisonType) !== ''
  //    })
  //    // find bounding items, only 40 items in the week list, not worrying about optimizing search
  //    let index = 0
  //    while (index < match.length && match[index].Week < weeks) {
  //      index++
  //    }
  //    if (index > 0) {
  //      size = `Somewhere between a ${getBabySizeField(match[index - 1], comparisonType)} and` +
  //      ` a ${getBabySizeField(match[index], comparisonType)}`
  //    } else {
  //      size = `We don't have a good estimate in this category for that time but the closest datapoint is a ${getBabySizeField(match[index], comparisonType)}`
  //    }
  //  }

  return (
    <div>
      { getSizeDiv({ week: weeks, size: babySizes[weeks], bMetric: true }) }
      { `Your Baby is ${comparisonType}ly: ${size.toString()}` }
    </div>
  )
}

export const getComparisonTypes = (): string[] => {
  // get keys or field list in comparison types object
  // exclude first value (special case of weeks exists as index not comparison type)
  return Object.keys(sizesByWeek[0]).slice(1)
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
