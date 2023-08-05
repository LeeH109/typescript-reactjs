import React from 'react';
import './App.css';

//
let person : {name:string,age:number}={
  name:'hanh',
  age:20,
}
//
type Student = {
  name:string,
}
let student: Student = {
  name:'hanh',
}
student.name = 'hanh dth'
console.log(student.name);
//
const thing:(age:number) => string[] = (age:number)=>{
  let name:string[] = ['1','2'];
  age=12;
  return name ;
}


function App() { 
  return (
    <div className="App">
      <div className=' text-2xl bg-red-300 h-100  w-full flex items-center justify-center bg-teal-lightest font-sans'>
 
         </div>
      helo
    </div>
  );
}

export default App;
