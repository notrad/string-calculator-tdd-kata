export function calculate(numbers: string): number {
    let sum: number = 0;
    let delimiter: string = ",";

    // Setting dynamic delimiter
    if (numbers.startsWith("//")) {
        delimiter = numbers.charAt(2);
        numbers = numbers.slice(2)
    }

    numbers.replace(/["\n"]/g, delimiter).split(delimiter).forEach((character: string) => {
        if (Number(character) < 0) {
            throw new Error(`negative numbers not allowed ${Number(character)}`);
        }
        sum += Number(character);
    });
    
    return sum;
}
