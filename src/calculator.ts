export function calculate(numbers: string): number {
    let sum: number = 0;
    let delimiter: string = ",";
    if (numbers.startsWith("//")) {
        delimiter = numbers.charAt(2);
        numbers = numbers.slice(2)
    }
    numbers.replace(/["\n"]/g, delimiter).split(delimiter).forEach((character: string) => sum += Number(character));
    return sum;
}
