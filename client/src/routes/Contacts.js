import React from 'react';

function Contacts({contacts}) {
  
  return (
    <div>
      <h1>Contacts</h1>
      {
        contacts.map((contact, idx) => <div key={idx}>{contact.name}</div>)
      }
    </div>
  );
}

export { Contacts };
