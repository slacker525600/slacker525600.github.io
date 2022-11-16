// import fs from 'fs'
// copied shamelessly from https://www.geeksforgeeks.org/how-to-convert-csv-to-json-file-having-comma-separated-values-in-node-js/
// it had a copy button so I assume they're ok with it.
// then rewrote most of it ...
// and then just manually converted the matrix because it was easier

export interface BabySizeInfo {
  Week: number
  Grams: string
  Pounds: string
  Centimeters: string
  Inches: string
  Home: string
  Goth: string
  Office: string
  Nature: string
  Tools: string
  Animals: string
  Etc: string
}

export const getBabySizeField = (babySize: BabySizeInfo, fieldName: string): string => {
  let toReturn = ''
  if (fieldName === 'Grams') {
    toReturn = babySize.Grams
  } else if (fieldName === 'Pounds') {
    toReturn = babySize.Pounds
  } else if (fieldName === 'Centimeters') {
    toReturn = babySize.Centimeters
  } else if (fieldName === 'Inches') {
    toReturn = babySize.Inches
  } else if (fieldName === 'Home') {
    toReturn = babySize.Home
  } else if (fieldName === 'Goth') {
    toReturn = babySize.Goth
  } else if (fieldName === 'Office') {
    toReturn = babySize.Office
  } else if (fieldName === 'Nature') {
    toReturn = babySize.Nature
  } else if (fieldName === 'Tools') {
    toReturn = babySize.Tools
  } else if (fieldName === 'Animals') {
    toReturn = babySize.Animals
  } else if (fieldName === 'Etc') {
    toReturn = babySize.Etc
  }
  return toReturn
}

export const makeBabyInfo = (lineArray: string[]): BabySizeInfo => {
  return {
    Week: +lineArray[0],
    Grams: lineArray[1],
    Pounds: lineArray[2],
    Centimeters: lineArray[3],
    Inches: lineArray[4],
    Home: lineArray[5],
    Goth: lineArray[6],
    Office: lineArray[7],
    Nature: lineArray[8],
    Tools: lineArray[9],
    Animals: lineArray[10],
    Etc: lineArray[11]
  }
}

// really this should be in a db or something, but dealing without a backend for now
// would like to make this more generic and accept a type of data to pull from file... but why
// export const getBabySizeCsv = (): BabySizeInfo[] => {
//   const result: BabySizeInfo[] = []
//   // Reading the file using default
//   // fs npm package
//   const csv = fs.readFileSync('')

//   // Convert the data to String and split it in an array
//   const lineArray = csv.toString().split('\r')

//   // Since headers are separated, we need to traverse remaining n-1 rows.
//   lineArray.slice(1).forEach((value) => {
//     // split line on , create object with header row as fieldname and push
//     const rowArray = value.split(',')
//     result.push(makeBabyInfo(rowArray))
//   })

//   return result
// }
/*
just saving the less<7 weeks grams estimate here.
const grams = [0.00075,
  0.0015,
  0.00307,
  0.06125,
  0.125,
  0.25,
  0.5,
  1,
  2,
*/
const sizesByWeek: BabySizeInfo[] = [
  {
    Week: 7,
    Grams: '>1 g',
    Pounds: '>0.002',
    Centimeters: '>1.6',
    Inches: '>0.6',
    Home: 'watch battery',
    Goth: 'several tears',
    Office: 'a single staple',
    Nature: '50 grains of sand',
    Tools: '',
    Animals: 'fruit fly',
    Etc: 'a raindrop'
  },
  {
    Week: 8,
    Grams: '1',
    Pounds: '0.0022',
    Centimeters: '1.6',
    Inches: '0.624',
    Home: '',
    Goth: 'brown recluse spider',
    Office: '30 staples',
    Nature: 'your fingernail',
    Tools: 'this tiny drill: http://gizmodo.com/5296077/freakishly-tiny-drill-inspires-us-to-believe-anything-is-possible-in-life',
    Animals: '',
    Etc: 'about 0.0000000000000000000000000004 times as heavy as The Earth.'
  },
  {
    Week: 9,
    Grams: '2',
    Pounds: '0.0044',
    Centimeters: '2.3',
    Inches: '0.897',
    Home: '',
    Goth: '',
    Office: 'a paperclip',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: 'a playing card'
  },
  {
    Week: 10,
    Grams: '4',
    Pounds: '0.0088',
    Centimeters: '3.1',
    Inches: '1.209',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: 'earthworm',
    Etc: 'a die'
  },
  {
    Week: 11,
    Grams: '7',
    Pounds: '0.0154',
    Centimeters: '4.1',
    Inches: '1.599',
    Home: '',
    Goth: 'a human eyeball',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: 'a quarter'
  },
  {
    Week: 12,
    Grams: '14',
    Pounds: '0.0308',
    Centimeters: '5.4',
    Inches: '2.106',
    Home: 'AAA battery',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: 'a finnishing nail',
    Animals: '',
    Etc: ''
  },
  {
    Week: 13,
    Grams: '23',
    Pounds: '0.0506',
    Centimeters: '7.4',
    Inches: '2.886',
    Home: 'AA battery',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: 'mouse',
    Etc: ''
  },
  {
    Week: 14,
    Grams: '43',
    Pounds: '0.0946',
    Centimeters: '8.7',
    Inches: '3.393',
    Home: '60-watt light bulb',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: 'a golf ball'
  },
  {
    Week: 15,
    Grams: '70',
    Pounds: '0.154',
    Centimeters: '10.1',
    Inches: '3.939',
    Home: 'C battery',
    Goth: 'a bottle of black nail polish',
    Office: '',
    Nature: 'ponderosa pinecone',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 16,
    Grams: '100',
    Pounds: '0.22',
    Centimeters: '11.6',
    Inches: '4.524',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: 'deck of cards'
  },
  {
    Week: 17,
    Grams: '140',
    Pounds: '0.308',
    Centimeters: '13',
    Inches: '5.07',
    Home: 'D battery',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: 'hockey puck'
  },
  {
    Week: 18,
    Grams: '190',
    Pounds: '0.418',
    Centimeters: '14.2',
    Inches: '5.538',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: 'hamster',
    Etc: ''
  },
  {
    Week: 19,
    Grams: '240',
    Pounds: '0.528',
    Centimeters: '15.3',
    Inches: '5.967',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 20,
    Grams: '300',
    Pounds: '0.66',
    Centimeters: '25.6',
    Inches: '9.984',
    Home: '',
    Goth: 'a human heart',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 21,
    Grams: '360',
    Pounds: '0.792',
    Centimeters: '26.7',
    Inches: '10.413',
    Home: 'can of emergency food',
    Goth: 'a taper candle',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 22,
    Grams: '430',
    Pounds: '0.946',
    Centimeters: '27.8',
    Inches: '10.842',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: 'football'
  },
  {
    Week: 23,
    Grams: '500',
    Pounds: '1.1',
    Centimeters: '28.9',
    Inches: '11.271',
    Home: '',
    Goth: 'a ouija board',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 24,
    Grams: '600',
    Pounds: '1.32',
    Centimeters: '30',
    Inches: '11.7',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: 'basketball'
  },
  {
    Week: 25,
    Grams: '660',
    Pounds: '1.452',
    Centimeters: '34.6',
    Inches: '13.494',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 26,
    Grams: '760',
    Pounds: '1.672',
    Centimeters: '35.6',
    Inches: '13.884',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 27,
    Grams: '875',
    Pounds: '1.925',
    Centimeters: '36.6',
    Inches: '14.274',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 28,
    Grams: '1000',
    Pounds: '2.2',
    Centimeters: '37.6',
    Inches: '14.664',
    Home: '',
    Goth: 'a small dagger',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 29,
    Grams: '1150',
    Pounds: '2.53',
    Centimeters: '38.6',
    Inches: '15.054',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 30,
    Grams: '1320',
    Pounds: '2.904',
    Centimeters: '39.9',
    Inches: '15.561',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 31,
    Grams: '1500',
    Pounds: '3.3',
    Centimeters: '41.1',
    Inches: '16.029',
    Home: '',
    Goth: 'a human brain',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 32,
    Grams: '1700',
    Pounds: '3.74',
    Centimeters: '42.4',
    Inches: '16.536',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 33,
    Grams: '1920',
    Pounds: '4.224',
    Centimeters: '43.7',
    Inches: '17.043',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: 'chihuahua',
    Etc: ''
  },
  {
    Week: 34,
    Grams: '2150',
    Pounds: '4.73',
    Centimeters: '45',
    Inches: '17.55',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 35,
    Grams: '2380',
    Pounds: '5.236',
    Centimeters: '46.2',
    Inches: '18.018',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 36,
    Grams: '2620',
    Pounds: '5.764',
    Centimeters: '47.4',
    Inches: '18.486',
    Home: '',
    Goth: 'half a cat',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 37,
    Grams: '2860',
    Pounds: '6.292',
    Centimeters: '48.6',
    Inches: '18.954',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 38,
    Grams: '3080',
    Pounds: '6.776',
    Centimeters: '49.8',
    Inches: '19.422',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: 'a brick'
  },
  {
    Week: 39,
    Grams: '3290',
    Pounds: '7.238',
    Centimeters: '50.7',
    Inches: '19.773',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 40,
    Grams: '3460',
    Pounds: '7.612',
    Centimeters: '51.2',
    Inches: '19.968',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: 'newborn baby',
    Etc: ''
  },
  {
    Week: 41,
    Grams: '3600',
    Pounds: '7.92',
    Centimeters: '51.5',
    Inches: '20.085',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  },
  {
    Week: 42,
    Grams: '3690',
    Pounds: '8.118',
    Centimeters: '51.7',
    Inches: '20.163',
    Home: '',
    Goth: '',
    Office: '',
    Nature: '',
    Tools: '',
    Animals: '',
    Etc: ''
  }
]

export default sizesByWeek
