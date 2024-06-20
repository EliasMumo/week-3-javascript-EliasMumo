// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

// Function to update the result element
function updateResult(result) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = "Result: " + result;
}

// Event listeners for the buttons
document.getElementById('addBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = add(num1, num2);
    updateResult(result);
});

document.getElementById('subtractBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = subtract(num1, num2);
    updateResult(result);
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = multiply(num1, num2);
    updateResult(result);
});

document.getElementById('divideBtn').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = divide(num1, num2);
    updateResult(result);
});

// Chart.js integration
document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas element
    var ctx = document.getElementById('myChart').getContext('2d');

    // Chart data
    var chartData = {
        labels: ['Add', 'Subtract', 'Multiply', 'Divide'],
        datasets: [{
            label: 'Operations Result',
            data: [0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Chart options
    var chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });

    // Function to update chart data
    function updateChartData(results) {
        myChart.data.datasets[0].data = results;
        myChart.update();
    }

    // Event listeners to update chart data
    document.getElementById('addBtn').addEventListener('click', function() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var result = add(num1, num2);
        var currentResults = myChart.data.datasets[0].data;
        currentResults[0] = result;
        updateChartData(currentResults);
    });

    document.getElementById('subtractBtn').addEventListener('click', function() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var result = subtract(num1, num2);
        var currentResults = myChart.data.datasets[0].data;
        currentResults[1] = result;
        updateChartData(currentResults);
    });

    document.getElementById('multiplyBtn').addEventListener('click', function() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var result = multiply(num1, num2);
        var currentResults = myChart.data.datasets[0].data;
        currentResults[2] = result;
        updateChartData(currentResults);
    });

    document.getElementById('divideBtn').addEventListener('click', function() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var result = divide(num1, num2);
        var currentResults = myChart.data.datasets[0].data;
        currentResults[3] = result;
        updateChartData(currentResults);
    });
});
