const form = document.getElementById('form');
const newsLetterCard = document.getElementById('news-letter-card');
const successCard = document.getElementById('success-card');
const errorText = document.getElementById('error-text');

const dismissBtn = document.getElementById('dismissBtn');


const EMAIL_PATTERN = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


function checkValidEmail(value) {
    return EMAIL_PATTERN.test(value);
}

function resetUI(input) {
    input?.classList.remove('invalid');
    newsLetterCard.classList.remove('hide');
    errorText.classList.add('hide');
    successCard.classList.add('hide');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData);

    const emailInput = form.querySelector('input[name="email"]');

    resetUI(emailInput);

    // Check input field is blank and valid or not.
    if (!email || !checkValidEmail(email)) {
        errorText.classList.remove('hide');
        emailInput.classList.add('invalid');
    }
    else {
        newsLetterCard.classList.add('hide');
        successCard.classList.remove('hide');
        emailInput.value = '';
    }


})

dismissBtn.addEventListener('click', () => {
    resetUI();
});