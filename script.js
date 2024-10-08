/**
 * Calcularea Sumelor:
 * Definește o funcție numită computeSum care 
 * primește doi parametri și returnează suma acestora.
 */
function computeSum(a, b){
    // const sum = a + b;
    // return sum;
    // sau:
    return a + b;
}
console.log("Suma este:",computeSum(5, 2));

/**
 * Determinarea Parității:
 * Scrie o funcție numită isEven care primește un număr 
 * și returnează true dacă numărul este par și false dacă este impar
 */
function isEven(myNumber){
    if(myNumber % 2 === 0){
        return true;
    }
    return false;
}
console.log("Numarul 12 este par?", isEven(12));
console.log("Numarul 13 este par?", isEven(13));

function isOdd(checkedNumber){
    let oddNumber = true;
    if(checkedNumber % 2 ===0){
        oddNumber = false;
    }
    return oddNumber;
}
console.log("Numarul 12 este impar?", isOdd(12));
console.log("Numarul 13 este impar?", isOdd(13));

/**
 * Concatenarea Șirurilor de caractere:
 * Creează o funcție numită concatenateStrings care primește 
 * două șiruri de caractere și le concatenează, returnând rezultatul.
 */
function concatenateStrings(string1, string2){
    return string1 + string2;
}
console.log("Cele doua stringuri concatenate:", concatenateStrings("ala", "bala"));

/**
 * Verificarea Palindromului:
 * Defineste o funcție numită isPalindrome care primește un șir și
 *  returnează true dacă este palindrom și false în caz contrar.
 */
function isPalindrome(text){
    let reversedText = "";
    for(const letter of text){
        reversedText = letter + reversedText;
    }
    return text === reversedText;
}
console.log("ABA este parindrom?", isPalindrome("ABA"));
console.log("ABCA este palinfrom?", isPalindrome("ABCA"));
console.log("epurasuusarupe este palindrom?", isPalindrome("epurasuusarupe"));

/**
 * Generarea unui Număr Aleatoriu:
 * Scrie o funcție numită generateRandomNumber care 
 * returnează un număr aleatoriu întreg între 1 și 100.
 */
function generateRandomNumber(){
    let x = Math.floor((Math.random() * 100) + 1);
    return x;
}
console.log("Numar aleatoriu generat:", generateRandomNumber());

/**
 * Calcularea Puterii:
 * Implementează o funcție numită raiseToPower care primește 
 * două numere (baza și exponentul) și returnează rezultatul ridicării la putere.
 */
// function raiseToPower(x, y){
//     return x ** y;
// }
// sau:
function raiseToPower(x, y){
    return Math.pow(x, y);
}
console.log("5 la puterea a 3-a este:", raiseToPower(5, 3));

/**
 * Calcularea Mediei:
 * Creează o funcție numită calculateAverage care primește 
 * un array de numere și returnează media lor.
 */
function calculateAverage(myArray){
    let sum = 0;
    for (let i=0; i<myArray.length; i++){
        sum = sum + myArray[i];
    }
    let average = sum / myArray.length;
    return average;
}
let myArray = new Array(5,12,46);
console.log("Media numerelor din array este:", calculateAverage(myArray));

/**
 * Transformarea în Majusculă:
 * Definește o funcție numită transformToUppercase 
 * care primește un șir și returnează șirul cu toate 
 * literele transformate în majusculă.
 */
function transformToUppercase(string1){
    return string1.toUpperCase();
}
console.log("Sirul cu majuscule:", transformToUppercase("lorem ipsum"));

/**
 * Verificarea Numărului Prim:
 * Scrie o funcție numită isPrimeNumber care primește un număr 
 * și returnează true dacă este prim și false în caz contrar.
 */
// cere imput de la user:
const number = parseInt(prompt("Introdu un numar pozitiv: "));
let isPrime = true;

// verifica daca numarul este egal cu 1
if (number === 1) {
    console.log("1 nu este nici numar prim, nici numar compus.");
}

// verifica daca numarul este mai mare decat 1
else if (number > 1) {
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} este un numar prim`);
    } else {
        console.log(`${number} nu este un numar prim`);
    }
}
// daca numarul este mai mic decat 1
else {
    console.log("Numarul introdus nu este un numar prim.");
}