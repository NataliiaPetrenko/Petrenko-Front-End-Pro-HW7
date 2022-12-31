const today = new Date ();
const currentYear = today.getFullYear();
const minBirthYear = 1900;
const maxBirthYear = currentYear;

let userBirthYear = Number(prompt("Hi! Kindly specify the year of your birth?", "1999"));

function isNumber (number) {
    return typeof number === 'number' && !isNaN(number);
}

while ((!(isNumber(userBirthYear)) || userBirthYear > currentYear || userBirthYear < minBirthYear)) {
    userBirthYear = Number(prompt("Hi! Kindly specify the year of your birth?", "1999"));
}

let userAge = currentYear - userBirthYear;

let userCity = prompt("Let's clarify where are you living now?", "Kyiv");
let userCountry;

switch (userCity) {
    case "Kyiv":
        userCountry = "You're living in Ukraine";
        break;
    case "Washington":
        userCountry = "You're living in the USA";
        break;
    case "London":
        userCountry = "You're living in the UK";
        break;
    default: userCountry = `You're living in ${userCity}`;
}

let userSport = prompt("What's your favourite type of sport?", "Football");

switch (userSport) {
    case "Football":
        userSportPlayer = "Wow! Would you like to be like Robert Lewandowski?";
        break;
    case "Box":
        userSportPlayer = "Wow! Would you like to be like Vitalii Klitchko?";
        break;
    case "Basketball":
        userSportPlayer = "Wow! Would you like to be like Michael Jordan?";
        break;
    default: userSportPlayer = "Sorry, but you didn't specify your favourite type of sport."
}

alert(
    `Your age is ${userAge}
    ${userCountry}
    ${userSportPlayer}`
);