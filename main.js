// /**
//  *
//  */
//
// // ---------------------
// // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// // ---------------------
//
// function max(first, second){
//     "use strict";
//     if(first > second) {
//       return first;
//     }
//     else {
//       return second;
//     }
// }
//
// console.assert(max(2, 3) === 3, "maxFail");
//
// // ---------------------
// //Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// //---------------------
//
// function maxOfThree(first, second, third) {
//     "use strict";
//     if((first>second) && (second<=third)) {
//       return first;
//     }
//     else if (second === third) {
//       return second;
//     }
//     else {
//       return third;
//     }
// }
//
// console.assert(maxOfThree(1, 2, 3) === 3, "maxFail");
// //
// // console.assert()
// //
// // // ---------------------
// // // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// // // ---------------------
// //
// function isVowel(char){
//     "use strict";
//     if(char === "a" || "i" || "o" || "e" || "u") {
//       return true;
//     }
//     else {
//       return false;
//     }
// }

//console.assert(isVowel(char))
//
// // ---------------------
// // Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// // ---------------------
//
// function rovarspraket(phrase){
//     "use strict";
//     var vowels = ["a", "e", "i", "o", "u"]
//     if()
// }
//
// // ---------------------
// // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// // // ---------------------
// //
// function sum(array){
//     "use strict";
//     var arraySum = 0;
//     for (var i = 0; i < array.length; i++) {
//         arraySum = arraySum + array[i];
//       }
//       return arraySum;
//
// }
//
// console.assert(sum([2,3,5]) === 10, "maxFail" );
//


function multiply(array){
    "use strict";
    var arrayMultiply = 1
    for (var i = 0; i < array.length; i++) {
      arrayMultiply = arrayMultiply * array[i];
        return arrayMultiply;
      };
}

console.assert(multiply([2, 3, 3]) === 18, "maxFail");

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

// function reverse(){
//     "use strict";
//     //...
// }
//
// // ---------------------
// // Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// // ---------------------
//
// function findLongestWord(words){
//     "use strict";
//     //...
// }
//
// // ---------------------
// // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// // ---------------------
//
// function filterLongWords(words, i) {
//     "use strict";
//     var longWords = [];
//     if(words[i].length > i) {
//       longWords.push(words[i]);
//       console.log(longWords);
//       return longWords.length;
// }
//
// filterLongWords(["Hello.", "Today", "is", "your", "birthday"], 5);
//
// //console.assert(filterLongWords(["Hello.", "Today", "is", "your", "birthday"], 5).length === 2, "maxFail");
//
//
// //
// // // ---------------------
// // // Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// // // ---------------------
// //
// // function charFreq(string){
// //     "use strict";
// //     //...
// // }
