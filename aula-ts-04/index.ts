function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number): void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1String: string | null = prompt("First Number");
    const num2String: string | null = prompt("Second Number");

      if (num1String === null || num2String === null) {
        console.log("Input canceled. Please enter valid numbers.");
        return;
    }

    const num1 = parseInt(num1String);
    const num2 = parseInt(num2String);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = sum(num1, num2);
        result += multiply(1, 2);
        showResult(result);
    } else {
        console.log("Invalid input. Please enter valid numbers.");
    }
})();