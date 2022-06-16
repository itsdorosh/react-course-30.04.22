import { ContactCard } from './ContactCard';

/**
 * @function ContactsList
 * @param contacts
 * @param onContactEdit
 * @param onContactDelete 
 * @returns JSX with Contact List and contacts, mapped to ContactCards JSX
 */
export function ContactsList({ contacts, onContactEdit, onContactDelete }) {

  return (
    <div className="contact-list">
      {contacts.map((contact) =>
        <ContactCard
          key={contact.id}
          contact={contact}
          onContactEdit={onContactEdit}
          onContactDelete={onContactDelete}
        />
      )}
    </div>
  );
}
