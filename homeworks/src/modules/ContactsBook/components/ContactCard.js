/**
 * 
 * @param contact - object with data for display contact card
 * @param onContactEdit - callback witch provides id of edited contact
 * @param onContactDelete - callback witch provides id of deteled contact
 * @returns JSX with ContactCard
 */
export function ContactCard({ contact, onContactEdit, onContactDelete }) {
  return (
    <div className="contact-card">
      <div>
        <h2>{contact.name}</h2>
        <p>{contact.username}</p>
        <p>{contact.phone}</p>
      </div>
      <div>
        <button onClick={() => onContactEdit(contact.id)}>✍️</button>
        <button onClick={() => onContactDelete(contact.id)}>🗑</button>
      </div>
    </div>
  );
}
