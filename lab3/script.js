document.getElementById("tipForm").addEventListener("input", calculateTip);

function calculateTip() {
    let billTotal = parseFloat(document.getElementById("billTotal").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    let currency = document.getElementById("currency").value;

    let currencySymbol = "$";

    // Update tip percentage label
    document.getElementById("tipPercentageDisplay").value = tipPercentage + "%";

    // Validate bill total
    if (isNaN(billTotal) || billTotal < 0) {
        document.getElementById("errorMessage").innerText = "Please enter a valid positive number for the bill total.";
        document.getElementById("tipAmount").value = "";
        document.getElementById("totalWithTip").value = "";
        return;
    } else {
        document.getElementById("errorMessage").innerText = "";
    }

    let tipAmount = (billTotal * tipPercentage) / 100;
    let totalWithTip = billTotal + tipAmount;

    // Convert to selected currency
    if (currency === "INR") {
        tipAmount *= 84.07;
        totalWithTip *= 84.07;
        currencySymbol = "₹";
    } else if (currency === "JPY") {
        tipAmount *= 149.34;
        totalWithTip *= 149.34;
        currencySymbol = "¥";
    }

    // Display values with two decimal places
    document.getElementById("tipAmount").value = currencySymbol + tipAmount.toFixed(2);
    document.getElementById("totalWithTip").value = currencySymbol + totalWithTip.toFixed(2);
}
