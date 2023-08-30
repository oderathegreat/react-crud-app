import React from 'react';

const ContactList = (props) => {

//console.log(props) 
//custom function to render the data
const renderContacts = props.contacts.map((contact) => {

  return(
    <div className='item'>
      <div className='content'>
            <div className='header'> {contact.name}</div>
            <div className='header'> {contact.age}</div>
            <div className='header'> {contact.city}</div>

      </div>

    <i className='trash alternate outline icon'></i>

    </div>
  );
})


  return (
    <div className='ui celled list'>
     {renderContacts}
  
    </div>
  )
}

export default ContactList
