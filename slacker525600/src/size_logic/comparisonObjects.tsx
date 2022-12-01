import { BabyComparisonObject } from '../babyTypes'

// should update this to build from csv for ease of migrating to db or other store

export const getComparisonTypes = (): string[] => {
  // get unique type labels from comparison objects
  return comparisonObjects.map(
    (val) => { return val.objectTypeLabel }
  ).filter(
    (value, index, self) => { return self.indexOf(value) === index }
  )
}

export const getValByCompType = (obj: BabyComparisonObject, comparisonType: string): number => {
  let toReturn = 0
  if (comparisonType === 'Length') {
    toReturn = obj.length
  } else if (comparisonType === 'Weight') {
    toReturn = obj.weight
  } else if (comparisonType === 'Volume') {
    toReturn = obj.volume
  }
  return toReturn
}

const gothObjects: BabyComparisonObject[] = [
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'Emptiness', ''),
  new BabyComparisonObject(0.0075, 0.00002, 0.0, 'Goth', '50 Tuberculosis bacteria', ''),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Goth', 'several tears', ''),
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'brown recluse spider', ''),
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'a human eyeball', ''),
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'a bottle of black nail polish', ''),
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'a human heart', ''),
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'a taper candle', ''),
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'a ouija board', ''),
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'a small dagger', ''),
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'a human brain', ''),
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'half of a black cat', '')
]

const homeObjects: BabyComparisonObject[] = [
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Home', 'Emptiness', ''),
  new BabyComparisonObject(0.0075, 0.00002, 0.0, 'Grain of sand on the floor', 'Home', ''),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Home', 'watch battery', '')
  //   Home: 'AAA battery',
  //   Home: 'AA battery',
  //   Home: '60-watt light bulb',
  //   Home: 'C battery',
  //   Home: 'D battery',
  //   Home: 'can of emergency food',
]

const officeObjects: BabyComparisonObject[] = [
  //   Office: '30 staples',
  //   Office: 'a paperclip',
  // index card,
  // stapler
  new BabyComparisonObject(0.0075, 0.00002, 0.0, 'Office', 'Grain of sand on the floor', ''),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Office', 'a single staple', '')
  // new BabyComparisonObject(
]

const natureObjects: BabyComparisonObject[] = [
  new BabyComparisonObject(0.0075, 0.00002, 0.0, 'Nature', 'Grain of sand at the beach', ''),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Nature', 'fruit fly', ''),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Nature', '50 grains of sand', '')
  //   Nature: 'your fingernail',
  //   Nature: 'ponderosa pinecone',
  //   Animals: 'earthworm',
  //   Animals: 'mouse',
  //   Animals: 'hamster',
  //   Animals: 'chihuahua',
  //   Animals: 'newborn baby',
]

const workshopObjects: BabyComparisonObject[] = [
  //   Tools: 'this tiny drill: http://gizmodo.com/5296077/freakishly-tiny-drill-inspires-us-to-believe-anything-is-possible-in-life',
  //   Tools: '',
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Workshop', 'a finnishing nail', ''),
  new BabyComparisonObject(0.0075, 0.00002, 0.0, 'Workshop', 'Single flake of sawdust', '')
]

const etcObjects: BabyComparisonObject[] = [
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Etc', 'a raindrop', '')
]

export const comparisonObjects: BabyComparisonObject[] = [
  ...gothObjects,
  ...homeObjects,
  ...officeObjects,
  ...natureObjects,
  ...workshopObjects,
  ...etcObjects
]

export default comparisonObjects
