// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate a random password
function generatePassword(pwdLngth,lwrCase,uprCase,nmrCase,splChar)
{
  /*
  console.log(`Password length is : ${pwdLngth}`);
  console.log(`lower case ? : ${lwrCase}`);
  console.log(`Upper case ? : ${uprCase}`);
  console.log(`Numeric ase ? : ${nmrCase}`);
  console.log(`Special characters ? : ${splChar}`);
  */

  var pwdArray=[];  // Base array for creating the password
  var password='';  
  //Creating array based on the input selections
  if(lwrCase==true)
  {
    pwdArray.push("abcdefghijklmnopqrstuvwxyz");
  }
  if(uprCase==true)
  {
    pwdArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if(nmrCase==true)
  {
    pwdArray.push("0123456789");
  }
  if(splChar==true)
  {
    pwdArray.push("*;<>()[]{}#$?!^|");
  }
  console.log(`The created array : ${pwdArray}`);
  console.log(`The array length is : ${pwdArray.length}`)
  console.log(`The pasword length is : ${pwdLngth}`);

  /*The loop iterates throug the created array  "password lenth" number of times to create the password. 
    1.The elements of the array is being randomly selected using the math operator.
    2.The character from the selected array element is being randomly selected using the math operator.

    Note:- The logic for the below mentioed for loop is an adaptation of the sample code from Trend.
  */
  for(let i=0;i<pwdLngth;i++)
  {
    /*
      Selecting the element of the pwdArray array randomly.
      The math operator should generate a number between 0 and the array length 
      so that the generated number can be used as an index to find out the element. 
    */
    let arrayElement =  Math.floor(Math.random() * (pwdArray.length));
    console.log(`array element is : ${arrayElement}`);
    /*
      Selecting the index of the character from the selcted array element.
      The math operator should generate a number between 0 and the length of the 
      array element selected so that the number can be used as an index to select the character.
    */ 
    let charIndex =  Math.floor(Math.random() * pwdArray[arrayElement].length);
    console.log(`char num is : ${charIndex}`);
    console.log(`Array Choice ${arrayElement} char choice ${charIndex}`);
    /* 
      The character is identified from the password array using the array element index 
      and the character index 
    */
    let passwordChar = pwdArray[arrayElement][charIndex];
    /* Creating the password from the selected characters from the password array */
    password = password + passwordChar;
  }
  console.log(`Password is ${password}`);
  return password;  
}
// Write password to the #password input
function writePassword()
{
  const MINPASSWRDLENGHT=8;   // Minimum password length
  const MAXPASSWRDLENGTH=128; // Maximum password length
  var passwdLengthLmt=true;
  
  var passwdLength = prompt("Please enter the length of your password.Please enter a number between 8 and 128.");
   console.log(`The length of the password is : ${passwdLength} `);
    
  if((passwdLength>=MINPASSWRDLENGHT)&&(passwdLength<=MAXPASSWRDLENGTH)) //checking the validity of the password length
  {
      var lowerCase;
      var upperCase;
      var numericCase;
      var specialChar;
      var charTypeValidity=true;    

      if(confirm("Do you want to include lower case ?")==true)
      {
        lowerCase=true;
      }
      else{lowerCase=false;}    
      console.log(`lower case ? : ${lowerCase}`);
      if(confirm("Do you want to include upper case ?")==true)
      {
        upperCase=true;
      }else{upperCase=false;}    
      console.log(`upper case ? : ${upperCase}`);
      if(confirm("Do you want to include numeric values ?")==true)
      {
        numericCase=true;
      }else{numericCase=false;}    
      console.log(`numeric case ? : ${numericCase}`);
      if(confirm("Do you want to include special characters ?")==true)
      {
        specialChar=true;
      }else{specialChar=false;}    
      console.log(`special characters ? : ${specialChar}`);
      //Checking whether atleast one character type has been selected.
      if((lowerCase==false)&&(upperCase==false)&&(numericCase==false)&&(specialChar==false))
      {
        alert("You have NOT selected any character type.Please select atleast one."); 
        charTypeValidity=false;     
      }       
  }
  else{
    alert("You entered a value which is out of range.Please enter a number between 8 and 128.");
    passwdLengthLmt=false;
  }
  //Genarating the random password
  if((charTypeValidity==true)&&(passwdLengthLmt=true))
  {
    //Calling the password generating function
    let password= generatePassword(passwdLength,lowerCase,upperCase,numericCase,specialChar);
    console.log(`The generated password is : ${password}`);
    //outputting the generated password to the browser
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

