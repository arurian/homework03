# homework03
University of Adelaide Coding boot camp homework #03 

Random Password Generator
-------------------------
Modified the scipt.js as per below.

1.WritePassword function is created which 
    a) Checks the validity of the password length to fall between 8 and 128.
    b) If it doesn't fall in the range, the application is exited with a message.
    c) If it falls within the range, the conditions for lower case, upper case,
        numeric and specisl characetrs are asked to the user and the responses are collected.
    d) If all the conditions are satisfied, the function generatePassword() is being called 
       where the password is generated randomly.

2. Inside the generatePassword() function
    a) The base array for generating the password is defined based on the input from the user.
    b) A for loop is created which loops through the array , and create the password using
        Math.random() randomly.
    
3. The created password is returned to the WritePassword function and displayed.
