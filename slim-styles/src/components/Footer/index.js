import React from "react";

const name ="Ana Savostina";
const num1= 1056;
const num2= 2115;
const stripVowels= str => {
const vowels= ["a", "e", "i", "o", "u"];
let result= "";
for (let i=0; i <str.lenght; i++) {
if(!stripVowels.includes(str[i].toLowerCase())) {
    result +=str[i];
}
}
return result;
};


function footer(){
    return(
        <>
        <h2>Hi! My name is {name}</h2>
        <h2>My name has {name.length}letters</h2>
        <h2>My name without vowels is: {stripVowels(name)}</h2>
        
        <h3> I can do math: {num1 + num2}</h3>
        
        <h3>Contact Information</h3>
        <h4>{Math.floor(Math.random()* 10)+ 1}</h4>
        <p>lorem ipsum</p>
        </>
    )
}
export default footer;
