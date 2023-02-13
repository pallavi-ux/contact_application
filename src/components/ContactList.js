import React from 'react'

const ContactList = (props) => {

  const listOfContacts = props.contacts.map((arrayElement) => {
    return (
        <>
        <div>{arrayElement.name}</div>
        <div>{arrayElement.email}</div>
        </>
    )
  })

  return (
    <div>
      Contact List
    </div>
  )
}

export default ContactList
