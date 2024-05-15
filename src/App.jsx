import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [a,setA]= useState(5);

  return (
    <>
<button style={{backgroundColor: "#646cffaa"}} onClick={()=>{
  
  if(a>=0){
    setA(a-1);
  }
}} disabled={a<0}>-</button>
<h1>{a+1}</h1>
<button style={{backgroundColor: "#646cffaa"}} onClick={()=>{
  
  if(a<=10){
  setA(a+1);
}
}} disabled={a>=10}>+</button>
      </>
      );
}

export default App;
