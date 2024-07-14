let hourlyRates = { 1: 53.27, 2: 45.39, 3: 41.85, 4: 38.42 };

document.getElementById('category').addEventListener('change', function() {
    const category = this.value;
    const hourlyRate = getHourlyRate(category);
    document.getElementById('hourlyRate').value = `$${hourlyRate.toFixed(2)}`;
    console.log(`Category: ${category}, Hourly Rate: ${hourlyRate}`);
});

function getHourlyRate(category) {
    return hourlyRates[category];
}

function calculateSalary() {
    const category = document.getElementById('category').value;
    const hourlyRate = getHourlyRate(category);
    const normalHours = parseFloat(document.getElementById('normalHours').value) || 0;
    const extraHours50 = parseFloat(document.getElementById('extraHours50').value) || 0;
    const extraHours100 = parseFloat(document.getElementById('extraHours100').value) || 0;
    const pensionRate = parseFloat(document.getElementById('pension').value) || 0;
    const socialSecurityRate = parseFloat(document.getElementById('socialSecurity').value) || 0;
    const familyAssignment = parseFloat(document.getElementById('familyAssignment').value) || 0;

    const normalPay = normalHours * hourlyRate;
    const extraPay50 = extraHours50 * hourlyRate * 1.5;
    const extraPay100 = extraHours100 * hourlyRate * 2;
    const totalPay = normalPay + extraPay50 + extraPay100;

    const pension = (totalPay * pensionRate) / 100;
    const socialSecurity = (totalPay * socialSecurityRate) / 100;

    const subtotalRemunerative = totalPay;
    const subtotalDiscount = pension + socialSecurity;
    const subtotalNoRemunerative = familyAssignment;
    const totalToReceive = subtotalRemunerative - subtotalDiscount + subtotalNoRemunerative;

    document.getElementById('subtotalRemunerative').innerText = `$${subtotalRemunerative.toFixed(2)}`;
    document.getElementById('subtotalDiscount').innerText = `$${subtotalDiscount.toFixed(2)}`;
    document.getElementById('subtotalNoRemunerative').innerText = `$${subtotalNoRemunerative.toFixed(2)}`;
    document.getElementById('totalToReceive').innerText = `$${totalToReceive.toFixed(2)}`;

    console.log(`Normal Pay: ${normalPay}, Extra Pay 50%: ${extraPay50}, Extra Pay 100%: ${extraPay100}`);
    console.log(`Pension: ${pension}, Social Security: ${socialSecurity}`);
    console.log(`Subtotal Remunerative: ${subtotalRemunerative}, Subtotal Discount: ${subtotalDiscount}, Subtotal No Remunerative: ${subtotalNoRemunerative}`);
    console.log(`Total To Receive: ${totalToReceive}`);
}
