export function calculate(numbers: string): number {
    let sum : number = 0;
    numbers.replace(/["\n"]/g,",").split(",").forEach((character: string) => sum += Number(character));
    return sum;
}
