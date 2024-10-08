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
console.log(isEven(12));
console.log(isEven(13));

function isOdd(checkedNumber){
    let oddNumber = true;
    if(checkedNumber % 2 ===0){
        oddNumber = false;
    }
    return oddNumber;
}
console.log(isOdd(12));
console.log(isOdd(13));

/**
 * Concatenarea Șirurilor de caractere:
 * Creează o funcție numită concatenateStrings care primește 
 * două șiruri de caractere și le concatenează, returnând rezultatul.
 */
function concatenateStrings(string1, string2){
    return string1 + string2;
}
console.log(concatenateStrings("ala", "bala"));

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
console.log(isPalindrome("ABA"));
console.log(isPalindrome("ABCA"));
console.log(isPalindrome("epurasuusarupe"));

/**
 * Generarea unui Număr Aleatoriu:
 * Scrie o funcție numită generateRandomNumber care 
 * returnează un număr aleatoriu întreg între 1 și 100.
 */
function generateRandomNumber(){
    let x = Math.floor((Math.random() * 100) + 1);
    return x;
}
console.log(generateRandomNumber());

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
console.log(raiseToPower(5, 3));

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
console.log(calculateAverage(myArray));

/**
 * Transformarea în Majusculă:
 * Definește o funcție numită transformToUppercase 
 * care primește un șir și returnează șirul cu toate 
 * literele transformate în majusculă.
 */

/**
 * Verificarea Numărului Prim:
 * Scrie o funcție numită isPrimeNumber care primește un număr 
 * și returnează true dacă este prim și false în caz contrar.
 */

  

