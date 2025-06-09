const txtInput = document.getElementById('text-input');
const btnSubmit = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkPalindrome(){
    const value = txtInput.value;
    if (value === '') {
        alert('Please input a value.');
        return;
    }else {
        const cleanedValue = value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const reversedValue = cleanedValue.split('').reverse().join('');
        if (cleanedValue === reversedValue) {
            result.textContent = `${value} is a palindrome.`;
        } else {
            result.textContent = `${value} is not a palindrome.`;
        }
    }
}

btnSubmit.addEventListener('click', checkPalindrome);