export function calculate(numbers: string): number {
    let sum = 0;
    numbers.split(",").forEach((character: string) => sum += Number(character));
    return sum;
}
