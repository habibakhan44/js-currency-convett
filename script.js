function convertCurrency() {
    var usDollarRate = 104.80;
    var riyalRate = 28;
    
    var country = document.getElementById("country").value;
    var amount = parseFloat(document.getElementById("amount").value);
  
    var totalCurrencyInPKR;
  
    if (isNaN(amount) || amount <= 0) {
      document.getElementById("currencyOutput").innerText = "Please enter a valid amount.";
      return;
    }
  
    if (country === "USD") {
      totalCurrencyInPKR = amount * usDollarRate;
    } else if (country === "SAR") {
      totalCurrencyInPKR = amount * riyalRate;
    }
  
    document.getElementById("currencyOutput").innerText = "Total in PKR: " + totalCurrencyInPKR.toFixed(2);
  }
  