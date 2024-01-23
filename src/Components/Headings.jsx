import React from "react";
function Headings() {
const date = new Date();
const currentTime =date.getHours();


let greeting;
let constomStyle = {
  color: ""
}

if(currentTime <12){
greeting='Good Morning Bondu';
constomStyle.color='red';
}
else if(currentTime <18){
greeting ="good afternoon vanshuu";
constomStyle.color='green';
}else{
  greeting="Good Night bye bye";
  constomStyle.color='blue';
}
return (
<h1 className='heading' style={constomStyle}>{greeting}</h1>
)}

export default Headings;