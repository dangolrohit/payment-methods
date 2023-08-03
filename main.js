document.getElementById('payBtn').onclick = function(){
const payPal = document.getElementById('payPal');
const carDs = document.getElementById('cdCard');
const eSewa = document.getElementById('eSewa');
const imePay = document.getElementById('imePay');
const khalti = document.getElementById('khalti');


if(payPal.checked){
    document.getElementById("disPlay").innerHTML = "Thank your for choosing PayPal."
}
else if(carDs.checked){
    document.getElementById("disPlay").innerHTML = "Thank your for Choosing Cards."
}
else if(eSewa.checked){
    document.getElementById("disPlay").innerHTML = "Thank your for Choosing eSewa."
}
else if(imePay.checked){
    document.getElementById("disPlay").innerHTML = "Thank your for Choosing ImePay."
}
else if(khalti.checked){
    document.getElementById("disPlay").innerHTML = "Thank your for Choosing Khalti."
}
else{
    alert("Please select any payment methods.")
}

}