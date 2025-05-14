// Handle form submission for currency conversion
document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form behavior (page reload)

    const form = this;
    const convertButton = form.querySelector('button');

    // Add loading state (you can style with CSS using the 'loading' class)
    form.classList.add('loading');
    convertButton.disabled = true;

    // Get user inputs
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // Simulate API response delay (e.g., fetching live exchange rates)
    setTimeout(() => {
        // Simulated static exchange rate (replace with real API data in production)
        const fakeExchangeRate = 0.85;
        const convertedAmount = amount * fakeExchangeRate;

        // Remove loading state
        form.classList.remove('loading');
        convertButton.disabled = false;

        // Update and animate result display
        const resultBox = document.getElementById('result');
        resultBox.classList.remove('show', 'value-change'); // Reset animation classes

        void resultBox.offsetWidth; // Force browser reflow to restart animation

        resultBox.classList.add('show', 'value-change');
        resultBox.innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }, 1000);
});

// Handle currency dropdown change animations
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');

// Animate dropdown change on 'From Currency'
fromCurrencySelect.addEventListener('change', function () {
    this.classList.add('swap-animation');
    setTimeout(() => this.classList.remove('swap-animation'), 500); // Remove class after animation
});

// Animate dropdown change on 'To Currency'
toCurrencySelect.addEventListener('change', function () {
    this.classList.add('swap-animation');
    setTimeout(() => this.classList.remove('swap-animation'), 500); // Remove class after animation
});
