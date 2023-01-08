import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
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

/*
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

*/
/*
function Car(props){
  return <li>I am a {props.brand}</li>
}

function Garage(){
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];

  return(
    <>
    <h1>Who lives in my garage?</h1>
    <ul>
      {cars.map((car)=> <Car key={car.id} brand = {car.brand}/>)}
    </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage/>)
*/


//---------------------React Forms--------------
/*
function MyForm(){
const [name,setName] = useState("");

  return(
    <form>
      <lable>
        Enter Your Name:
         <input 
         type="text" 
         value={name} 
         onChange={(e) => setName(e.target.value)}
         />
      </lable>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
*/

/*
function MyForm(){
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  return (
    <form onSubmit = {handleSubmit}>
      <label>
        Enter your name:
        <input type='text'
        value= {name}
        onChange = {(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
*/

/*
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
     {getGreeting(user)}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);

*/
/*
const root = ReactDOM.createRoot(document.getElementById('root'));

function tick(){
  const element= (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}
setInterval(tick, 100);

*/

/*
function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />
);
*/

/*
//Extracting Components

function formatDate(date){
  return date.toLocaleDateString();
}

function Avatar(props){
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name} />
  );
  }

  function UserInfo(props){
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }

  function Comment(props){
    return(
      <div className='comment'>
        <UserInfo user = {props.author} />
        <div className='Comment-text'>
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

const comment = {
  date : new Date(),
  text: "I hope you enjoy React",
  author: {
    name: " Fuck",
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Comment
  date = {comment.date}
  text = {comment.text}
  author = {comment.author}/>
);

*/
/*
//Responding to events 

function MyButton(){
  function handleClick(){
    alert('You clicked me');
  }

  return(
    <button onClick={handleClick}>
      Click me
    </button>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyButton />)

*/

//Updating the screen 
/*
function MyButton(){
  const[count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyButton />)
*/
/*

export default function MyApp(){
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton /> <br/>
      <MyButton />
    </div>
  )
}

function MyButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return(
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />)

*/

export default function MyApp(){
  const[count, setCount] = useState(0);

  function handleClick(){
  setCount (count + 1)
}
return (
  <div>
     <h1>Counters that update together</h1>
     <MyButton count={count} onClick={handleClick} />
     <MyButton count={count} onClick={handleClick} />
  </div>
);
}

function MyButton({count, onClick}){
  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />)