
import './App.css';
import React from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';


function App() {

const contacts =  [
{
    id: 1,
    "name" :"Karl Peters",
    "age": 21,
    "city" : "Kakamega"
},

{
  id: 2,
  "name" :"Fordo Mondeo",
  "age": 25,
  "city" : "Nairobi"
},

{
  id: 3,
  "name" :"Mona Lisa",
  "age": 24,
  "city" : "Mombasa"
}



];


  return (
    <div className="ui container">

  <h1>Hello World</h1>
  <Header/>
  <AddContact/>
  <ContactList  contacts={contacts}/>
    </div>
  );
}

export default App;
