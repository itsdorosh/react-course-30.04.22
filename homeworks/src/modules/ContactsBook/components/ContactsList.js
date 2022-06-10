import {ContactCard} from './ContactCard';

export function ContactsList ({contacts, onContactEdit}) {

    return (
        <div>
            { contacts.map(contact => <ContactCard key={contact.id} contact={contact} onContactEdit={onContactEdit} />) }
        </div>
    );
}
