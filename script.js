//password text generator 
function writePassword() {
  console.log("test2");
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


var generateBtn = document.querySelector("#generate");
var lowercase="abcdefghijklmnopqwrstuvwxyz";
var lowercaseArray=lowercase.split("");
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseArray=uppercase.split("");
var specialcharacters="!@#$%^&*?+=*--_";
var specialcharactersArray=specialcharacters.split("");
var numbers="0123456789";
var numbersArray=numbers.split("");
console.log(lowercase);
console.log(lowercaseArray);

let finalCharacters = [ ]

  //function passwordGenerator(num) {
    //var password = '';
    //for (var i = 0; i < num; i++) {
      //password += generatePassword(num);
      // }
      // return password;
      
      //password generator 
      function generatePassword(){
        var length = prompt("please input desired password. Must be >=8 and <128 characters");
        length = parseInt(length);
        if(length < 8 || length > 128){
          alert(" Invalid, must be between 8-128 Characters");
        }
        console.log("test");
        return Math.floor(Math.random(numbersArray + specialcharactersArray + lowercaseArray + uppercaseArray) + length);
        
        
        //return String.fromCharCode(Math.floor(Math.random(numbersArray + specialcharactersArray + lowercaseArray + uppercaseArray) === length)-0);
  }
  
  //console.log(finalCharacters(num));
  //for (var i = 0; i <finalCharacters.length;';');
  //console.log(finalCharacters);
  //console.log(document.getElementById("special").checked());
  //console.log(document.getElementById("lower").checked());
  //console.log(document.getElementById("numbers").checked());
  //console.log(document.getElementById("upper").checked());
  //console.log(Math.random());
  
//}
 



// add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//generate button criteria 
var generate = document.getElementById("start");
generate.onclick = function() {
  console.log("click works");
  document.getElememtById("selectPopup").style.visibility = ("visible");//added parentheses
}

//Password Criteria that is submitted by the user is read.
var g2 = document.getElementById("start");
g2.onclick = function generatePassword(){
  console.log("generate button works");
  //let passCharacters =[ ];
  

 // includes lowercase
 if(document.getElementById("lower").checked = true){
  console.log("user wants lowercase letters");
  finalCharacters.push("abcdefghijklmnopqrstuvwxwz");
 } 

//includes uppercase letters 
if(document.getElementById("upper").checked){
  console.log("user wants upperscase letters");
  finalCharacters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}

//includes special characters
if(document.getElementById("special").checked){
  console.log("user wants special characters");
  finalCharacters.push("!@#$%^&*?+=|*--_");
}

//includes numbers
if(document.getElementById("numbers").checked){
  console.log("user wants numeric characters");
  finalCharacters.push("0,1,2,3,4,5,6,7,8,9,");
}
finalCharacters.push("a");
finalCharacters.push("8");
//console.log(passCharacters)
console.log(finalCharacters);
console.log(generatePassword);
console.log(password);
//for every character set selected add 1 item from that set immediately to the password and push the entire set to the array.
//for loop added
//password();
//generatePassword();
}
