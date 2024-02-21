export class AdHocCalculator {
  sum(numberOne: string, numberTwo: string): number;
  sum(numberOne: number, numberTwo: number): number;

  public sum(numberOne: any, numberTwo: any): number {
    return Number(numberOne) + Number(numberTwo);
  }
}
