// // Simple Algorithm  Seconds to Minutes
// // Create a function that accepts one argument (seconds)
// // and converts it into minutes and seconds and returns back.
// // Example input: (94)
// // Example output: "1 minutes and 34 seconds"

// function converter(sec){
//     return  (sec- sec % 60)/60 + " munites " + sec % 60 + ' seconds'}
//   console.log(converter(94))
  
  
  
  
//   // 2. Print the written number with prefix
//   // Create a function that accepts one argument (number) and returns it as a string with 'Number is: " prefix.
//   // Example input: (22) Example output: "Number is: 22"
  
  
//   function number(e){
//       return ("Number is:" + e)
//   }
  
//   console.log(number(12))
  
//   // 3. Remove the 2nd string from the 1th string
//   // Create a function that accepts two arguments(firstString, secondString) and removes the second string from the first string.
//   // Example input: ('I am a happy person.', 'person')// Example output: "I am a happy ."
  
//   function removesecond(firstString, secondString){
//     newString = firstString.replace(secondString,'')
//     return newString
//   }
//   console.log(removesecond('I am a happy person.','person'))
   
  
//   // 4. Replace the 2nd string with the 3rd string
//   // Create a function that accepts two arguments(firstString, secondString, thirdString) and replaces the 2nd string with the 3rd one in the 1th string.
//   // Example input: ('I am a bad person.', 'bad', 'good')
//   // Example output: "I am a good person."
  
//   function changeString(firstString, secondString,thirdString){
//     newString = firstString.replace(secondString,thirdString)
//     return newString
//   }
//   console.log(changeString('I am a bad person.','bad','good'))
  
//   // 5. Return the closest bigger even number of the given number
//   // Create a function that accepts one argument(number) and returns the closest bigger even number of given number.
  
//   // Example input: (354)
//   // Example output: 356
  
//   // Example input: (23)
//   // Example output: 24
  
//   function giveClosestEven(e){
//     if (e % 2 === 0 ){
//       return e +2
//     }
//     else {
//       return e +1 
//     }
//   }
  
//   console.log(giveClosestEven(23))
  
  
//   // 6. Create a simple calculator function
//   // Create a function that accepts three arguments(number1, number2, theMathOperator) and does a calculation based on the given math operator* and returns the result.
  
//   // Math operators: +, -, /, *
//   // Example input: (11,5,'+')
//   // Example output: 16
  
//   // Example input: (50,20,'/')
//   // Example output: 2.5
  
  
//   function calculator(num1, num2, theMathOperator){
//     if (theMathOperator == '+'){
//       return num1 + num2
//     }
//     if (theMathOperator == '-'){
//       return num1 - num2
//     }
//     if (theMathOperator == '*'){
//       return num1 * num2
//     }
//     if (theMathOperator == '/'){
//       return num1 / num2
//     }
//     if (theMathOperator == '%'){
//       return num1 % num2
//     }
//     else {
//       return 'lutfen dogru bir operator giriniz'
//     }
//   }
//   console.log(calculator(4,5,'+'))
  
  
  
  
//   /*3-Truncate a String*/
  
//   var yazi = prompt("bir yazi giriniz");
//   var i = prompt("kac caracter istiyorsun");
  
  
//   function truncateString(yazi,i){
  
//       if (i === 0 || i >yazi.length || i < 0)
//       alert ( "...")
//       else if (i <= yazi.length)
//       alert (yazi.slice(0, i) + "...")
  
//   }
  
//   truncateString(yazi,i)
  
  
  
  
//   /*4-Confirm the Ending*/
  
//   var yazi = prompt("bir yazi giriniz");
//   var son = prompt("bi yazi daha giriniz");
  
//   function confirmEnding(yazi,son){
  
//       deger = yazi.slice(yazi.length-son.length, yazi.length)
//       if (deger === son)
//       alert ( "true")
//       else 
//       alert ("yazilar uyusmuyor")
  
//   }
  
//   confirmEnding(yazi,son)


function PersonProto (i, j, k) {
  this.firstname = i;
  this.lastname = j;
  this.age = new Date();
}
PersonProto.prototype.getFullname = function() {
  return `${this.firstname}  ${this.lastname}`
}
const person1 = new PersonProto('oguzhan', 'karsli', 30)
console.log(person1)


class PersonClass {
  constructor(i, j, k) {
    this.firstname = i;
    this.lastname = j;
    this.age = new Date()
  }
  getFullname() {
    return `${this.firstname}  ${this.lastname}`
  }
}
const person2 = new PersonClass('sevilay', 'karsli', 28)
console.log(person2)