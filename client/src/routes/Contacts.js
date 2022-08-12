import React from 'react';

function Contacts({contacts}) {
  
  return <>
    <h1>Contacts</h1>
    <div className="d-md-flex w-100 my-md-3 pl-md-3 flex-wrap">
      {
        contacts.map((contact, idx) => <div key={idx} className={`bg-${idx % 2 ? 'dark' : 'light'} mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center ${idx % 2 ? 'text-white' : ''} overflow-hidden`} style={{width: '33%'}}>
          <div className="my-3 py-3">
            <h2 className="display-5">{contact.name}</h2>
            <p className="lead">{contact.position}</p>
            <p>Department: {contact.department}</p>
            <p><small>{contact.email} | {contact.phone}</small></p>
          </div>
        </div>)
      }
    </div>
  </>;
}

export { Contacts };
