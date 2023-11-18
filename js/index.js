// On click the generate password button, the random password should be displayed in the input box


// 1st way of using the functions

// jquey it is called an arrow function
// const generateRandom = () => {
//     console.log('hello this clicked');
// }


// selectors in javascript.
// getElementById - yes - single element
// getElementsByClassName - yes - collection of elements
// getElementsByTagName - yes - collection of elements
// querySelector - yes - single element
// querySelectorAll - yes - collection of elements - node list

// Select the password input box
const passwordBox = document.getElementById('iPassword');

console.log(passwordBox);

function generateRandom() {
    passwordBox.value = 'hello';

    // variable to store the password.
    let password = ""; // empty string
    // Aa8%

    let length = 12; // the length of the random generated password.
    // A a 1 & 

    let allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // length = 26

    let allLowerCase = "abcdefghijklmnopqrstuvwxyz"; // length= 26

    let allNumbers = "0123456789";

    let allSymbols = "!@#$%^&*()_+";

    let all = allUpperCase + allLowerCase + allNumbers + allSymbols; // lenght = 72
    // let all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+" // length = 
    // the Math.random() - 0 - 1 (0.11 , 0.99) returs the value between 0 and 1

    console.log(Math.random() * 26);

    // I want the range from 0 to 25;
    let temp = Math.random() * allUpperCase.length // 0.14 * 26 = 3.64
    // 0.000000001 to 25.99999999

    let temp2 = Math.floor(temp); // 3.64 -> 3 , 25.99 -> 25
    // the range of temp2 is 0 to 25

    password += allUpperCase[temp2];  // the value of temp2 is 24 
    // alluppercase[24] - 'Y'

    let temp3 = Math.floor(Math.random() * allLowerCase.length); // the range of temp3 is 0 to 25

    password += allLowerCase[temp3];

    let temp4 = Math.floor(Math.random() * allNumbers.length); // the range of temp4 is 0 to 9

    password += allNumbers[temp4];

    let temp5 = Math.floor(Math.random() * allSymbols.length); // the range of temp5 is 0 to 12

    password += allSymbols[temp5];

    // the lenght of password is 4 but i need 12

    // 12>4
    // 12>5
    // 12>6
    while (length > password.length) {
        // Math.random is returning from 0 to 1
        let randomIndex = Math.floor(Math.random() * all.length);  // the range is between 0 to 71
        password += all[randomIndex];
    }

    console.log(password);
    console.log(password.length);

    // add the random generated password to the input box.
    passwordBox.value = password;

    // // 0 to 38.999999
    // Math.random() * 39;


    // range should be between 1 to 26

}


// the copy button should be working 

// three things in functions
// 1. function declaration : function copyFunction();
// 2. function call : button , image, text, link
// 3. function definition: // function body { // code goes here (main logic) }


function copyFunction() { // function declaration
    // function body (definiton)
    passwordBox.select(); // select the text
    document.execCommand("copy"); // copy the text
}