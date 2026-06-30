export class Calculator {
  calculate(a: number, operator: string, b: number): number {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) throw new Error('Деление на ноль');
        return a / b;
      default:
        throw new Error(`Неизвестная операция: ${operator}`);
    }
  }
}
