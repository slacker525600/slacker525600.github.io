import { ChangeEvent } from 'react'

export interface babySize {
  week: number
  weightGrams: number
  lengthCm: number
  volumeMl: number
}

export interface sizeDisplay {
  week: number
  size: babySize
  bMetric: boolean
}

export interface babyProps {
  weeks: number
  comparisonType: string
  priority: string
}

export interface babyInputProps extends babyProps {
  weeksSetter: (event: ChangeEvent<HTMLInputElement>) => void
  comparisonTypeSetter: (event: ChangeEvent<HTMLSelectElement>) => void
  prioritySetter: (event: ChangeEvent<HTMLSelectElement>) => void
}
