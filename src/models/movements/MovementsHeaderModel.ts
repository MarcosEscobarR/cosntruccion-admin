export interface MovementDetails {
  id: number,
  product: string,
  amount: number
}

export interface MovementsHeaderModel {
  id: number,
  depositor: string,
  date: string,
  type: string,
  observation: string,
  leader: string,
  workArea: string,
  details: MovementDetails[]
}
