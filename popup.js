document.addEventListener('DOMContentLoaded', function() {
    // Tab switching logic
    const diffTab = document.getElementById('diffTab');
    const applyTab = document.getElementById('applyTab');
    const diffCalc = document.getElementById('diffCalc');
    const applyCalc = document.getElementById('applyCalc');

    diffTab.addEventListener('click', () => {
        diffCalc.classList.add('active');
        applyCalc.classList.remove('active');
        diffTab.classList.add('active');
        applyTab.classList.remove('active');
    });

    applyTab.addEventListener('click', () => {
        applyCalc.classList.add('active');
        diffCalc.classList.remove('active');
        applyTab.classList.add('active');
        diffTab.classList.remove('active');
    });

    // Percentage difference calculation
    document.getElementById('calculateDiff').addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('number1').value);
        const num2 = parseFloat(document.getElementById('number2').value);
        const resultDiv = document.getElementById('diffResult');

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = 'Please enter valid numbers';
            return;
        }

        if (num1 === 0) {
            resultDiv.textContent = 'Cannot calculate percentage difference when first number is 0';
            return;
        }

        const difference = ((num2 - num1) / Math.abs(num1)) * 100;
        const roundedDiff = Math.round(difference * 100) / 100;
        const type = difference >= 0 ? 'increase' : 'decrease';

        resultDiv.textContent = `${num2} is a ${Math.abs(roundedDiff)}% ${type} from ${num1}`;
    });

    // Apply percentage calculation
    document.getElementById('calculateApply').addEventListener('click', () => {
        const baseValue = parseFloat(document.getElementById('baseValue').value);
        const percentage = parseFloat(document.getElementById('percentage').value);
        const resultDiv = document.getElementById('applyResult');

        if (isNaN(baseValue) || isNaN(percentage)) {
            resultDiv.textContent = 'Please enter valid numbers';
            return;
        }

        const change = baseValue * (percentage / 100);
        const newValue = baseValue + change;
        const roundedValue = Math.round(newValue * 100) / 100;
        const type = percentage >= 0 ? 'increase' : 'decrease';

        resultDiv.textContent = `${baseValue} ${type}d by ${Math.abs(percentage)}% is ${roundedValue}`;
    });
}); 