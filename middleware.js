document.addEventListener('DOMContentLoaded', function() {
    const balanceElement = document.getElementById('balance');
    const stocksContainer = document.getElementById('stocks');
    const transactionForm = document.getElementById('transaction-form');

    let balance = 10000;
    let portfolio = {};

    function updateBalance() {
        balanceElement.textContent = `$${balance}`;
    }

    function updateStocks() {
        for (const symbol in portfolio) {
            fetchStockPrice(symbol);
        }
    }

    function fetchStockPrice(symbol) {
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=2JDNTN5DYIDL8ARU`)
        .then(response => response.json())
        .then(data => {
            const price = parseFloat(data['Global Quote']['05. price']);
            const stockElement = document.getElementById(`price-${symbol}`);
            stockElement.textContent = `$${price.toFixed(2)}`;
        })
        .catch(error => console.error('Error fetching stock price:', error));
    }

    function buyOrSell(event) {
        // Implementation remains the same
        // ...
    }

    updateBalance();
    updateStocks();

    transactionForm.addEventListener('submit', buyOrSell);
});
