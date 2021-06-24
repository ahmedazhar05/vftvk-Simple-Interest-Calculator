// Computes the Simple Interest and Amount from values inputted by the user.
function compute() {
    var p = document.getElementById("principal");
    var principal = parseFloat(p.value);

    // shows an alert if principal value is 0 or some negative value
    if(principal <= 0){

        // shows the alert and focuses the principal element
        alert("Enter a positive number");
        p.focus();

        return;
    }
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    // calculates the interest
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    // calculates the amount
    var amount = principal + interest;

    // updates the DOM accordingly
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br>at an interest rate of <mark>${rate}</mark>.<br>You will receive an amount of <mark>${amount}</mark>,<br>in the year <mark>${year}</mark><br/><br/>`;
}
// updates the DOM to show interest rate whenever user changes the rate slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
