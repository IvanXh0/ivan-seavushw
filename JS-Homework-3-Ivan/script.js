// The Age Calculator

// Forgot how old you are? Calculate it!

//     Write a function named calculateAge that:
//     takes 2 arguments: birth year, current year.
//     calculates the age based on those years.
//     outputs the result to the screen like so: "You are NN years old"
//     Call the function three times with different sets of values.
//     Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

let birthYearInput = prompt('Enter your year of birth');
let numberBirthYearInput = Number(birthYearInput);
const date = new Date();
const constCurrentYear = date.getFullYear();

function calculateAge(birthYear, currentYear) {
    while (Number.isNaN(birthYear)) {
        birthYear = Number(prompt('Enter your year of birth'));
    }
    currentYear = constCurrentYear;
    actualBirthYear = currentYear - birthYear;
    return actualBirthYear;
}

let solutionYear = calculateAge(numberBirthYearInput, constCurrentYear);
console.log(`Your current age is ${solutionYear}.`);


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

// object
// boolean
// number
// string
// undefined


function parameterType(parameter) {
    console.log(typeof parameter);
}

parameterType('text');
parameterType(24);
parameterType(true);
parameterType(undefined);
parameterType({});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a JavaScript function that will return:

//     Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
//     Note: Call the function in console to see answer
//     Bonus: Make the same function work for converting dog to human years as well

function calculateDogAge(age, fromHumanToDog) {
    if (fromHumanToDog) {
        return age * 7;
    } else {
        return age / 7;
    }
}

let typeOfConversion = prompt('If you want to convert dog years to human years - press Q, if you want human years to dog years press H').toLowerCase();

// from dog to human years
if (typeOfConversion === 'q') {
    let humanAge = Number(prompt('Enter the dog age to convert to human age:'));
    let dogAge = calculateDogAge(humanAge, true);
    console.log(`A ${humanAge} year old dog is equivalent to ${dogAge} human years.`);
}

// from human to dog years
if (typeOfConversion === 'h') {
    let dogAge = Number(prompt('Enter the dog age in human years to convert to regular human years:'));
    let humanAge = calculateDogAge(dogAge, false);
    console.log(`A dog that is ${dogAge} years old is equivalent to ${humanAge} human years.`);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a javascript function for an ATM:

//     The ATM should give cash
//     Should return "Not enough money" if you request more money
//     Should return the amount withdrawn and money left on the account if you have enough
//     Note: Hardcode your account money in the program
//     Bonus: Make it work with prompt()!

const amount = prompt("Enter the amount you want to withdraw:");
function atm(amount) {
    const accountBalance = 3000;

    while (isNaN(amount)) {
        amount = Number(prompt("Enter the amount you want to withdraw:"));
    } if (amount > accountBalance) {
        return "You dont have enough money in your bank account.";
    } else {
        const moneyLeft = accountBalance - amount;
        return `You withdrew $${amount} and you have $${moneyLeft} left on your account.`;
    }
}
console.log(atm(amount));

