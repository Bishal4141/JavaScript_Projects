const calculateBtn = document.getElementById('calculate'); // corrected ID
const ageResult = document.getElementById('result');
const birthdayInput = document.getElementById('birthday');

function calculateAge(){
    const birthdayValue = birthdayInput.value;
    if(birthdayValue === ""){
        ageResult.textContent = "Please enter your date of birth";
        return;
    } else {
        const age = getAge(birthdayValue);
        ageResult.textContent = `You are ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue){
    const today = new Date();
    const birthDate = new Date(birthdayValue); // fixed variable name here
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    const day = today.getDate() - birthDate.getDate();

    if(month < 0 || (month === 0 && day < 0)){
        age--;
    }
    return age;
}

calculateBtn.addEventListener('click', calculateAge);

// Refresh button click event to reload page
document.getElementById('refreshBtn').addEventListener('click', function() {
    location.reload();
});
