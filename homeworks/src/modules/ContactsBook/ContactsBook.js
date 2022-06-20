import { useEffect, useState } from 'react';

import { Search, ContactsList, EditPopup } from './components';
import { API_BASE_URL } from './constants';

import './ContactsBook.css';

/**
 * ContactsBook - Smart component with retrieving data, Search, Contact List and Editing contact.
 * @returns JSX for ContactsBook
 * @status ✅
 */
export function ContactsBook() {
  const [showPopup, setShowPopup] = useState(false);
  const [contactsList, setContactsList] = useState([]);
  const [editableContact, setEditableContact] = useState(null);
  const [searchValue, onSearchChange] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/users`)
      .then((res) => res.json())
      .then(contacts => setContactsList(contacts));
  }, []);

  let filteredContactsList = !!searchValue
    ? contactsList.filter((contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
      || contact.username.toLowerCase().includes(searchValue.toLowerCase())
      || contact.phone.includes(searchValue)
    )
    : contactsList;


  // For List
  const onContactEdit = (id) => {
    const editableContact = contactsList.find(contact => contact.id === id);

    if (editableContact) {
      setShowPopup(true);
      setEditableContact(editableContact);
    }
  }

  const onContactDelete = (id) => {
    setContactsList(contactsList.filter(contact => contact.id !== id));
  }

  // For Popup    
  const onEditComplete = (changedContact) => {
    setShowPopup(false);

    setContactsList(contactsList.map(contact =>
      contact.id === changedContact.id
        ? changedContact
        : contact
    ));
  }

  const onEditCancel = () => {
    setShowPopup(false);
  }

  return (
    <div className="contacts-book-module">
      <Search
        placeholder={"Start type name..."}
        onSearchChange={onSearchChange}
      />

      <ContactsList
        contacts={filteredContactsList}
        onContactEdit={onContactEdit}
        onContactDelete={onContactDelete}
      />

      {showPopup
        ? <EditPopup
          editableContact={editableContact}
          onEditComplete={onEditComplete}
          onEditCancel={onEditCancel}
        />
        : <></>
      }
    </div>
  );
}
