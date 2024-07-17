document.addEventListener("DOMContentLoaded", function() {
    const calcNumbers = document.querySelector('.calc-numbers');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            
            switch(buttonText) {
                case 'C':
                    calcNumbers.value = '0';
                    break;
                    case '←': 
                    calcNumbers.value = calcNumbers.value.slice(0, -1);
                    if (calcNumbers.value === '') {
                        calcNumbers.value = '0'; 
                    }
                    break;
                case '%':
                    calcNumbers.value += buttonText; 
                    break;
                case '.':
                    if (!calcNumbers.value.includes('.')) {
                        calcNumbers.value += buttonText;
                    }
                    break;
                case '=':
                    try {
                        calcNumbers.value = eval(calcNumbers.value.replace('÷', '/').replace('x', '*'));
                    } catch(error) {
                        calcNumbers.value = 'Error';
                    }
                    break;
                default:
                    if (calcNumbers.value === '0') {
                        calcNumbers.value = buttonText;
                    } else {
                        calcNumbers.value += buttonText;
                    }
                    break;
            }
        });
    });
});