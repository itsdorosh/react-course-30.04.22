import {ContactCard} from './ContactCard';

// DONE ✅
export function ContactsList ({contacts, onContactEdit, onContactDelete}) {

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
