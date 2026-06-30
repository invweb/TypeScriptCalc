# TypeScript Calculator

Калькулятор на TypeScript с графическим интерфейсом (Electron).

TypeScript calculator with a graphical interface (Electron).

## Возможности / Features

- Сложение (+) / Addition (+)
- Вычитание (−) / Subtraction (−)
- Умножение (×) / Multiplication (×)
- Деление (÷) / Division (÷)
- Цепочки операций (например: `2 + 3 × 4`) / Chained operations (e.g. `2 + 3 * 4`)
- Защита от деления на ноль / Division by zero protection

## Скриншот / Screenshot

![Калькулятор](screenshots/calculator.png)

## Установка / Installation

```bash
git clone https://github.com/invweb/TypeScriptCalc.git
cd TypeScriptCalc
npm install
```

## Запуск / Run

```bash
npm start
```

Команда собирает проект и открывает окно калькулятора.

Builds the project and opens the calculator window.

## Сборка / Build

```bash
npm run build
```

Компиляция TypeScript в `dist/`.

Compiles TypeScript to `dist/`.

## Технологии / Tech Stack

- TypeScript
- Electron
- HTML / CSS
