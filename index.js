import React from 'react';
import ReactDOM from 'react-dom/client';
/*
function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
  //const isGoal = props.isGoal;
  if (props.isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true} />);
*/

/*

 function Car(props){
  return <h2>I am a {props.brand}!</h2>
 }             
 //A fragment looks like an empty HTML tag: <></>.
 function Garage(){
  return(
    <>            
    <h1>Who lives in my Garage</h1>
    <Car brand="Ford"/>
    </>
  );
 }
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Garage />)
 */


//Logical && Operator
/*

function Garage(props){
  const cars = props.cars;
  return(
    <>
    <h1>Garage</h1>
    {cars.length > 0 &&
    <h2>
      You have {cars.length} cars in your garage.
    </h2>
    }
    </>
  );
}

const cars = ['ford', 'BMW', 'Audi'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars ={cars} />);

*/

//Ternary Operator
//Another way to conditionally render elements is by using a ternary operator.


function Goal(props){
  const isGoal = props.isGoal;
  return(
    <>
    {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </>
  )
}

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true} />);