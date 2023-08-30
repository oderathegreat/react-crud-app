import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

//console.log(props) 
//custom function to render the data
const renderContacts = props.contacts.map((contact) => {

  return(

    <ContactCard  contact={contact}/>
 
  );
})


  return (
    <div className='ui celled list'>
     {renderContacts}
  
    </div>
  )
}

export default ContactList
