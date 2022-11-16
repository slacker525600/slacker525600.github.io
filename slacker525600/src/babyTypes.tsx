import { ChangeEvent } from 'react'

export interface babyProps {
  weeks: number
  comparisonType: string
}

export interface babyInputProps extends babyProps {
  weeksSetter: (event: ChangeEvent<HTMLInputElement>) => void
  comparisonTypeSetter: (event: ChangeEvent<HTMLSelectElement>) => void
}
