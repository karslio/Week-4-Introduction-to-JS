// /*1*/

// function seconds(e){
//     return e/60
// }
// seconds(120)


// /*2*/

// function number(e){
//     return ("Number is:" + e)
// }

// number(12)



/*3-Truncate a String*/

// var yazi = prompt("bir yazi giriniz");
// var i = prompt("kac caracter istiyorsun");


// function truncateString(yazi,i){

//     if (i == 0 || i >yazi.length || i < 0)
//     alert ( "...")
//     else if (i <= yazi.length)
//     alert (yazi.slice(0, i) + "...")

// }

// truncateString(yazi,i)




/*4-Confirm the Ending*/

// var yazi = prompt("bir yazi giriniz");
// var son = prompt("bi yazi daha giriniz");

// function confirmEnding(yazi,son){

//     deger = yazi.slice(yazi.length-son.length, yazi.length)
//     if (deger === son)
//     alert ( "true")
//     else 
//     alert ("yazilar uyusmuyor")

// }

// confirmEnding(yazi,son)