// ==============================
// Part 1: Variables & Conditionals

document.getElementById('checkBillBtn').addEventListener('click', function() {
    let bill = parseFloat(document.getElementById('billAmount').value);
    let resultText;

    if (isNaN(bill) || bill <= 0) {
        resultText = "Please enter a valid bill amount!";
    } else if (bill < 20) {
        resultText = "Small bill, consider adding a tip!";
    } else if (bill <= 100) {
        resultText = "Medium bill, a tip is appreciated.";
    } else {
        resultText = "Large bill! A generous tip is encouraged.";
    }

    document.getElementById('billResult').textContent = resultText;
});

// ==============================
// Part 2: Functions
// ==============================
function calculateTip(amount, percent) {
    return (amount * percent / 100).toFixed(2);
}

document.getElementById('calculateTipBtn').addEventListener('click', function() {
    let bill = parseFloat(document.getElementById('billAmount').value);
    let tipPercent = parseFloat(document.getElementById('tipPercent').value);

    if (isNaN(bill) || isNaN(tipPercent)) {
        document.getElementById('tipResult').textContent = "Enter valid numbers!";
    } else {
        document.getElementById('tipResult').textContent = "Tip Amount: $" + calculateTip(bill, tipPercent);
    }
});

// Additional function: random color generator
function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// ==============================
// Part 3: Loops
// ==============================
document.getElementById('suggestTipsBtn').addEventListener('click', function() {
    const list = document.getElementById('suggestedTipsList');
    list.innerHTML = '';
    const bill = parseFloat(document.getElementById('billAmount').value) || 50;

    // for loop example
    for (let i = 10; i <= 20; i += 5) {
        let li = document.createElement('li');
        li.textContent = `${i}% tip = $${calculateTip(bill, i)}`;
        list.appendChild(li);
    }
});

// ==============================
// Part 4: DOM Manipulation
// ==============================
document.getElementById('colorBtn').addEventListener('click', function() {
    document.getElementById('colorText').style.color = getRandomColor();
});

document.getElementById('addTextBtn').addEventListener('click', function() {
    const container = document.getElementById('dynamicTextContainer');
    const newPara = document.createElement('p');
    newPara.textContent = "Thank you for using the tip calculator!";
    container.appendChild(newPara);
});
