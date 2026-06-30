const display = document.getElementById('display');
const errorEl = document.getElementById('error');

let current = '0';
let previous = '';
let operator = '';
let shouldResetDisplay = false;

function updateDisplay() {
  display.textContent = current;
}

function showError(msg) {
  errorEl.textContent = msg;
  setTimeout(() => { errorEl.textContent = ''; }, 2000);
}

document.querySelector('.buttons').addEventListener('click', async (e) => {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  const action = btn.dataset.action;
  const value = btn.dataset.value;

  if (action === 'clear') {
    current = '0';
    previous = '';
    operator = '';
    shouldResetDisplay = false;
    updateDisplay();
    return;
  }

  if (action === 'num') {
    if (shouldResetDisplay) {
      current = value;
      shouldResetDisplay = false;
    } else {
      current = current === '0' ? value : current + value;
    }
    updateDisplay();
    return;
  }

  if (action === 'dot') {
    if (!current.includes('.')) {
      current += '.';
      updateDisplay();
    }
    return;
  }

  if (action === 'op') {
    if (previous && operator && !shouldResetDisplay) {
      const a = parseFloat(previous);
      const b = parseFloat(current);
      try {
        const result = await window.calcAPI.calculate(a, operator, b);
        current = String(result);
        updateDisplay();
      } catch (err) {
        showError(err.message || 'Ошибка');
        current = '0';
        updateDisplay();
      }
    }
    previous = current;
    operator = value;
    shouldResetDisplay = true;
    return;
  }

  if (action === 'equals') {
    if (!previous || !operator) return;
    const a = parseFloat(previous);
    const b = parseFloat(current);
    try {
      const result = await window.calcAPI.calculate(a, operator, b);
      current = String(result);
      updateDisplay();
      previous = '';
      operator = '';
      shouldResetDisplay = true;
    } catch (err) {
      showError(err.message || 'Ошибка');
      current = '0';
      updateDisplay();
    }
    return;
  }
});
