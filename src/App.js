
import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';


function App() {

 
  
const LOCAL_STORAGE_KEY = "contacts";

const [contacts, setContacts] = useState([]);

const addContactHandler = (contact) => {
  console.log(contact);
  setContacts([...contacts, contact]);
};

//useEffect hook for local Storage
useEffect( ()=>{

  //storing our user data in local storage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))

},[contacts])



  return (
    <div className="ui container">

  <h1>Hello World</h1>
  <Header/>
  <AddContact addContactHandler={addContactHandler} />
  <ContactList  contacts={contacts}/>
    </div>
  );
}

export default App;
