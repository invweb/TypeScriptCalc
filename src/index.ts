import * as readline from 'readline';
import { Calculator } from './calculator';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calc = new Calculator();

function prompt(): void {
  console.log('\n=== Калькулятор ===');
  console.log('Операции: +, -, *, /');
  console.log('Для выхода введите "exit"\n');

  rl.question('Первое число: ', (a) => {
    if (a.trim() === 'exit') {
      rl.close();
      return;
    }

    const num1 = parseFloat(a);
    if (isNaN(num1)) {
      console.log('Ошибка: введите число');
      prompt();
      return;
    }

    rl.question('Операция (+, -, *, /): ', (op) => {
      if (op.trim() === 'exit') {
        rl.close();
        return;
      }

      rl.question('Второе число: ', (b) => {
        if (b.trim() === 'exit') {
          rl.close();
          return;
        }

        const num2 = parseFloat(b);
        if (isNaN(num2)) {
          console.log('Ошибка: введите число');
          prompt();
          return;
        }

        try {
          const result = calc.calculate(num1, op.trim(), num2);
          console.log(`\nРезультат: ${num1} ${op.trim()} ${num2} = ${result}`);
        } catch (e) {
          if (e instanceof Error) {
            console.log(`Ошибка: ${e.message}`);
          }
        }

        prompt();
      });
    });
  });
}

prompt();
