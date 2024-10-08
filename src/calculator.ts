export function calculate(numbers: string): number {
    let singleDelimiter: string = ",";
    let multipleDelimiters: string[] = [];
    let negativeNumbers: number[] = [];
    let parsedNumbers: number[] = [];
    const delimiterRegex = /\[(.*?)\]/g;

    if (numbers.startsWith("//")) {
        if (numbers.charAt(2) !== "[") {
            singleDelimiter = numbers.charAt(2);
            numbers = numbers.slice(4);
        } else {
            multipleDelimiters = [...numbers.matchAll(delimiterRegex)].map(match => match[1]);
            numbers = numbers.slice(numbers.indexOf('\n') + 1);
        }
    }

    if (multipleDelimiters.length > 0) {
        multipleDelimiters.forEach(delimiter => {
            numbers = numbers.split(new RegExp(delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))).join(singleDelimiter);
        });
    }

    parsedNumbers = numbers
                        .replace(/\n/g, singleDelimiter)
                        .split(singleDelimiter)
                        .map(Number)
                        .filter((number:number) => number < 1000 || Number.isNaN(number));

    negativeNumbers = parsedNumbers.filter((number:number) => number < 0);

    if (negativeNumbers.length > 0) throw new Error(`negative numbers not allowed ${negativeNumbers.toString()}`);

    return parsedNumbers.reduce((acc, num) => acc + num, 0);;
}
