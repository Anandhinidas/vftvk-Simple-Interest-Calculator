// This function updates the rate display next to the slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

// This function computes the simple interest and displays the result
function compute() {
    // Get the principal value from the input
    var principal = document.getElementById("principal").value;

    // Validate that principal is a positive number
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    // Get rate and years values
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Compute simple interest
    var interest = principal * years * rate / 100;

    // Compute the future year
    var year = new Date().getFullYear() + parseInt(years);

    // Build the result string and highlight numbers using <mark>
    var resultText = "If you deposit <mark>" + principal + "</mark>,<br>" +
                     "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
                     "You will receive an amount of <mark>" + interest + "</mark>,<br>" +
                     "in the year <mark>" + year + "</mark>";

    // Set the result in the span element with id 'result'
    document.getElementById("result").innerHTML = resultText;
}

// Initialize rate display on page load
window.onload = updateRate;

        