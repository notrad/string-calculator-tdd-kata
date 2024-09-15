export function calculate(numbers: string): number {
    let delimiter: string = ",";
    let negativeNumbers: number[] = [];
    let parsedNumbers: number[] = [];
    let indexOfOpeningBracket: number = 0;
    let indexOfClosingBracket: number = 0;

    if (numbers.startsWith("//")) {
        if (numbers.charAt(2) !== "[") {
            delimiter = numbers.charAt(2);
            numbers = numbers.slice(2);
        } else {
            indexOfOpeningBracket = numbers.indexOf("[") + 1;
            indexOfClosingBracket = numbers.indexOf("]");
            delimiter = numbers.slice(indexOfOpeningBracket, indexOfClosingBracket);
            numbers = numbers.slice(indexOfClosingBracket + 1);
        }
    }

    parsedNumbers = numbers.replace(/["\n"]/g, delimiter).split(delimiter).map(Number).filter((number:number) => number < 1000 || Number.isNaN(number));

    negativeNumbers = parsedNumbers.filter((number:number) => number < 0);

    if (negativeNumbers.length > 0) throw new Error(`negative numbers not allowed ${negativeNumbers.toString()}`);

    return parsedNumbers.reduce((acc, num) => acc + num, 0);;
}
