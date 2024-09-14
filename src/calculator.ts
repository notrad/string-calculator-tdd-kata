export function calculate(numbers: string): number {
    let delimiter: string = ",";
    let negativeNumbers: number[] = [];
    let parsedNumbers: number[] = [];

    if (numbers.startsWith("//")) {
        delimiter = numbers.charAt(2);
        numbers = numbers.slice(2)
    }

    parsedNumbers = numbers.replace(/["\n"]/g, delimiter).split(delimiter).map(Number).filter((number:number) => number < 1000 || Number.isNaN(number));

    negativeNumbers = parsedNumbers.filter((number:number) => number < 0);

    if (negativeNumbers.length > 0) throw new Error(`negative numbers not allowed ${negativeNumbers.toString()}`);

    return parsedNumbers.reduce((acc, num) => acc + num, 0);;
}
