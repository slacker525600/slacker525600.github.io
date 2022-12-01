import { babySize } from '../babyTypes'

export const getValByWeekSize = (obj: babySize, comparisonType: string): number => {
  let toReturn = 0
  if (comparisonType === 'Length') {
    toReturn = obj.lengthCm
  } else if (comparisonType === 'Weight') {
    toReturn = obj.weightGrams
  } else if (comparisonType === 'Volume') {
    toReturn = obj.volumeMl
  }
  return toReturn
}

export const sizesByWeek: babySize[] = [
  {
    week: 0,
    weightGrams: 0.0,
    lengthCm: 0.0,
    volumeMl: 0.0
  },
  {
    week: 1,
    weightGrams: 0.0075,
    lengthCm: 0.0002,
    volumeMl: 0.000000001
  },
  {
    week: 2,
    weightGrams: 0.015125,
    lengthCm: 0.0,
    volumeMl: 0.0
  },
  {
    week: 3,
    weightGrams: 0.03125,
    lengthCm: 0.0,
    volumeMl: 0.0
  },
  {
    week: 4,
    weightGrams: 0.0625,
    lengthCm: 0.0,
    volumeMl: 0.0
  },
  {
    week: 5,
    weightGrams: 0.125,
    lengthCm: 0.0,
    volumeMl: 0.0
  },
  {
    week: 6,
    weightGrams: 0.25,
    lengthCm: 0.0,
    volumeMl: 0.0
  },
  {
    week: 7,
    weightGrams: 0.5,
    lengthCm: 0.8,
    volumeMl: 0.0
  },
  {
    week: 8,
    weightGrams: 1,
    lengthCm: 1.6,
    volumeMl: 0.0
  },
  {
    week: 9,
    weightGrams: 2,
    lengthCm: 2.3,
    volumeMl: 0.0
  },
  {
    week: 10,
    weightGrams: 4,
    lengthCm: 3.1,
    volumeMl: 0.0
  },
  {
    week: 11,
    weightGrams: 7,
    lengthCm: 4.1,
    volumeMl: 0.0
  },
  {
    week: 12,
    weightGrams: 14,
    lengthCm: 5.4,
    volumeMl: 0.0
  },
  {
    week: 13,
    weightGrams: 23,
    lengthCm: 7.4,
    volumeMl: 0.0
  },
  {
    week: 14,
    weightGrams: 43,
    lengthCm: 8.7,
    volumeMl: 0.0
  },
  {
    week: 15,
    weightGrams: 70,
    lengthCm: 10.1,
    volumeMl: 0.0
  },
  {
    week: 16,
    weightGrams: 100,
    lengthCm: 11.6,
    volumeMl: 0.0
  },
  {
    week: 17,
    weightGrams: 140,
    lengthCm: 13,
    volumeMl: 0.0
  },
  {
    week: 18,
    weightGrams: 190,
    lengthCm: 14.2,
    volumeMl: 0.0
  },
  {
    week: 19,
    weightGrams: 240,
    lengthCm: 15.3,
    volumeMl: 0.0
  },
  {
    week: 20,
    weightGrams: 300,
    lengthCm: 25.6,
    volumeMl: 0.0
  },
  {
    week: 21,
    weightGrams: 360,
    lengthCm: 26.7,
    volumeMl: 0.0
  },
  {
    week: 22,
    weightGrams: 430,
    lengthCm: 27.8,
    volumeMl: 0.0
  },
  {
    week: 23,
    weightGrams: 500,
    lengthCm: 28.9,
    volumeMl: 0.0
  },
  {
    week: 24,
    weightGrams: 600,
    lengthCm: 30,
    volumeMl: 0.0
  },
  {
    week: 25,
    weightGrams: 660,
    lengthCm: 34.6,
    volumeMl: 0.0
  },
  {
    week: 26,
    weightGrams: 760,
    lengthCm: 35.6,
    volumeMl: 0.0
  },
  {
    week: 27,
    weightGrams: 875,
    lengthCm: 36.6,
    volumeMl: 0.0
  },
  {
    week: 28,
    weightGrams: 1000,
    lengthCm: 37.6,
    volumeMl: 0.0
  },
  {
    week: 29,
    weightGrams: 1150,
    lengthCm: 38.6,
    volumeMl: 0.0
  },
  {
    week: 30,
    weightGrams: 1320,
    lengthCm: 39.9,
    volumeMl: 0.0
  },
  {
    week: 31,
    weightGrams: 1500,
    lengthCm: 41.1,
    volumeMl: 0.0
  },
  {
    week: 32,
    weightGrams: 1700,
    lengthCm: 42.4,
    volumeMl: 0.0
  },
  {
    week: 33,
    weightGrams: 1920,
    lengthCm: 43.7,
    volumeMl: 0.0
  },
  {
    week: 34,
    weightGrams: 2150,
    lengthCm: 45,
    volumeMl: 0.0
  },
  {
    week: 35,
    weightGrams: 2380,
    lengthCm: 46.2,
    volumeMl: 0.0
  },
  {
    week: 36,
    weightGrams: 2620,
    lengthCm: 47.4,
    volumeMl: 0.0
  },
  {
    week: 37,
    weightGrams: 2860,
    lengthCm: 48.6,
    volumeMl: 0.0
  },
  {
    week: 38,
    weightGrams: 3080,
    lengthCm: 49.8,
    volumeMl: 0.0
  },
  {
    week: 39,
    weightGrams: 3290,
    lengthCm: 50.7,
    volumeMl: 0.0
  },
  {
    week: 40,
    weightGrams: 3460,
    lengthCm: 51.2,
    volumeMl: 0.0
  },
  {
    week: 41,
    weightGrams: 3600,
    lengthCm: 51.5,
    volumeMl: 0.0
  },
  {
    week: 42,
    weightGrams: 3690,
    lengthCm: 51.7,
    volumeMl: 0.0
  }
]

export default sizesByWeek
