import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {

//perform array destructuring to pass data
const {id, name, age, city } = props.contact

  return (
    //contact list component reused on contactcard
<div className='item'>

  <img  className="ui avatar image" src={user} alt="user" />
      <div className='content'>
            <div className='header'> {name}</div>
            <div className='header'> {age}</div>
            <div className='header'> {city}</div>

      </div>

    <i className='trash alternate outline icon' style={{color: "red", marginTop: "7px"}}></i>

    </div>
      

  
  )
}

export default ContactCard
