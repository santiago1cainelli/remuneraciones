let hourlyRates = { 1: 53.27, 2: 45.39, 3: 41.85, 4: 38.42 };

document.addEventListener("DOMContentLoaded", function() {
    const normalHoursInput = document.getElementById("normalHours");
    const extraHours50Input = document.getElementById("extraHours50");
    const extraHours100Input = document.getElementById("extraHours100");
    const pensionInput = document.getElementById("pension");
    const socialSecurityInput = document.getElementById("socialSecurity");
    const law23032Input = document.getElementById("law23032");
    const familyAssignmentInput = document.getElementById("familyAssignment");
    const categoryInput = document.getElementById("category");

    const normalPayElem = document.getElementById("normalPay");
    const extraPay50Elem = document.getElementById("extraPay50");
    const extraPay100Elem = document.getElementById("extraPay100");
    const pensionRateElem = document.getElementById("pensionRate");
    const socialSecurityRateElem = document.getElementById("socialSecurityRate");
    const law23032RateElem = document.getElementById("law23032Rate");
    const familyAssElem = document.getElementById("familyAss");

    const subtotalRemunerativeElem = document.getElementById("subtotalRemunerative");
    const subtotalDiscountElem = document.getElementById("subtotalDiscount");
    const subtotalNoRemunerativeElem = document.getElementById("subtotalNoRemunerative");
    const totalToReceiveElem = document.getElementById("totalToReceive");

    categoryInput.addEventListener('change', function() {
        const category = this.value;
        const hourlyRate = getHourlyRate(category);
        document.getElementById('hourlyRate').value = `$${hourlyRate.toFixed(2)}`;
        calculateSalary();
    });

    function getHourlyRate(category) {
        return hourlyRates[category];
    }

    function calculateSalary() {
        const category = document.getElementById('category').value;
        const hourlyRate = getHourlyRate(category);
        const normalHours = parseFloat(normalHoursInput.value) || 0;
        const extraHours50 = parseFloat(extraHours50Input.value) || 0;
        const extraHours100 = parseFloat(extraHours100Input.value) || 0;
        const pensionRate = parseFloat(pensionInput.value) || 0;
        const socialSecurityRate = parseFloat(socialSecurityInput.value) || 0;
        const law23032Rate = parseFloat(law23032Input.value) || 0;
        const familyAssignment = parseFloat(familyAssignmentInput.value) || 0;

        const normalPay = normalHours * hourlyRate;
        const extraPay50 = extraHours50 * hourlyRate * 1.5;
        const extraPay100 = extraHours100 * hourlyRate * 2;
        const totalPay = normalPay + extraPay50 + extraPay100;

        const pension = (totalPay * pensionRate) / 100;
        const socialSecurity = (totalPay * socialSecurityRate) / 100;
        const law23032 = (totalPay * law23032Rate) / 100;

        const subtotalRemunerative = totalPay;
        const subtotalDiscount = pension + socialSecurity + law23032;
        const subtotalNoRemunerative = familyAssignment;
        const totalToReceive = subtotalRemunerative - subtotalDiscount + subtotalNoRemunerative;

        normalPayElem.innerText = `$${normalPay.toFixed(2)}`;
        extraPay50Elem.innerText = `$${extraPay50.toFixed(2)}`;
        extraPay100Elem.innerText = `$${extraPay100.toFixed(2)}`;
        pensionRateElem.innerText = `$${pension.toFixed(2)}`;
        socialSecurityRateElem.innerText = `$${socialSecurity.toFixed(2)}`;
        law23032RateElem.innerText = `$${law23032.toFixed(2)}`;
        familyAssElem.innerText = `$${familyAssignment.toFixed(2)}`;

        subtotalRemunerativeElem.innerText = `$${subtotalRemunerative.toFixed(2)}`;
        subtotalDiscountElem.innerText = `$${subtotalDiscount.toFixed(2)}`;
        subtotalNoRemunerativeElem.innerText = `$${subtotalNoRemunerative.toFixed(2)}`;
        totalToReceiveElem.innerText = `$${totalToReceive.toFixed(2)}`;
    }

    document.getElementById("category").addEventListener("change", calculateSalary);
    normalHoursInput.addEventListener("input", calculateSalary);
    extraHours50Input.addEventListener("input", calculateSalary);
    extraHours100Input.addEventListener("input", calculateSalary);
    pensionInput.addEventListener("input", calculateSalary);
    socialSecurityInput.addEventListener("input", calculateSalary);
    law23032Input.addEventListener("input", calculateSalary);
    familyAssignmentInput.addEventListener("input", calculateSalary);
});

function getHourlyRate(category) {
    return hourlyRates[category];
}
