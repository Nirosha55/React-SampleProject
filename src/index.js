// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//Challange -1 jsx in to html
// import React from 'react';
// import ReactDOM, { render } from 'react-dom';

// ReactDOM.render(
// <div>
// <h1 className='heading'
// contentEditable='true'
// spellCheck='false'
// >My Favorite fruits:</h1>
// <ul>
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Orange</li>
//   </ul>

// </div>
// ,document.getElementById('root'));



// js -> html in js   challage -2
// import React from 'react';
// import ReactDOM, { render } from 'react-dom';

// const greeting = "Good Morning handsome husband garuu!!!"
// const Fname="Vinod";
// const Lname = "Akurati";
// const number = 7;

// ReactDOM.render(
//   <div>
//     <h1>Vinnuu 😘</h1>
//     <h2>I love you kannaa
//       miss you soo much bujjiiii
// 💞
// 💓
// 💗
// 💖
// 💘
// 💝
// 💟</h2>
// {/* <h1>Hello - {Fname + " " + Lname}</h1> */}
// {/*  <h1>Hello - {Fname}{Lname}</h1> */}
// {/* <h1>Hello - {`${Fname} ${Lname}`}</h1> */}
// <p> My husband's lucky number is :{Math.floor(Math.random()*10)}</p>
//   </div>

// ,document.getElementById('root'));


// challage -2

// import React from 'react';
// import ReactDOM, { render } from 'react-dom';

// const name ="Nirosha rathod";
// const currentDate =new Date();
// // const currentYear= currentDate.getFullYear();


// ReactDOM.render(
// <div>
//   <h1>Heloo</h1>
//   <p>My name is  {name}</p>
//   {/* <p>copyright is  {currentYear}</p> */}
//   <p>copyright is  {currentDate.getFullYear()}</p>
// </div>

// ,document.getElementById('root'));


//challange
// import React from 'react';
// import ReactDOM, { render } from 'react-dom';

// const constomStyle ={
//   color:'red', fontSize:'50px',fontStyle:'italic',
//   border:"solid black 2px"
// }

// ReactDOM.render(
// <div>
// <h1 style={constomStyle}
// // style={{color:'red', fontSize:'50px',fontStyle:'italic'}}
// >My Favorite fruits:</h1>
// <div>
// {/* create img */}
// <img src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg" alt="Girl in a jacket" className='flowers'></img><br></br>
// <img src="https://cdn.pixabay.com/photo/2017/06/18/21/37/rose-2417334_640.jpg" alt="Girl in a jacket" className='flowers'></img>
// </div>
// </div>
// ,document.getElementById('root'));



// Challaneg

// const correntDate = new Date(2019 , 1 ,1,11);
// console.log(correntDate);
// console.log(correntDate);

// import React from 'react';
// import ReactDOM from 'react-dom';

// // const date = new Date(2024,1,1,21);
// const date = new Date();
// const currentTime =date.getHours();

// let greeting;
// let constomStyle = {
//   color: ""
// }

// if(currentTime <12){
// greeting='Good Morning';
// constomStyle.color='red';
// }
// else if(currentTime <18){
// greeting ="good afternoon";
// constomStyle.color='green';
// }else{
//   greeting="Good Night";
//   constomStyle.color='blue';
// }

// ReactDOM.render(
// <h1 className='heading' style={constomStyle}>{greeting}</h1>
//   ,document.getElementById('root')
// );

// Challange
// import React from 'react';
// import ReactDOM from 'react-dom';

// function Heading(){
//   return <h1>My Favorite fruits:</h1>
// }

// function Headings(){
//   return <h1>My Favorite snacks:</h1>
// }

// ReactDOM.render(
//   <div>
//     <Heading />
//     <Headings />
//    <ul>
//     <li>Apple</li>
//     <li>Banana</li>
//     <li>Orange</li>
//     </ul>

//   </div>
//   ,document.getElementById('root'));


// challenge

// const date = new Date(2024,1,1,21);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

ReactDOM.render(
<div>
  <App/>
</div>,document.getElementById('root')
);
