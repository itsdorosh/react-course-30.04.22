import { useState, useRef } from 'react';

/**
 * @function EditPopup
 * @param editableContact
 * @param onEditComplete
 * @param onEditCancel
 * @returns JSX with EditPopup, with prepopulated data in inputs
 */
export function EditPopup({ editableContact, onEditComplete, onEditCancel }) {

  const [contactName, setContactName] = useState(editableContact.name);
  const [contactUsername, setContactUsername] = useState(editableContact.username);
  const [contactPhone, setContactPhone] = useState(editableContact.phone);
  const [hasUnsavedChanges, setUnsavedChanges] = useState(false);

  const overlayElementRef = useRef();

  const onOverlayClick = ({ target }) => {
    (target === overlayElementRef.current) && onEditCancel();
  };

  const onSave = () => {
    hasUnsavedChanges
      ? onEditComplete({ id: editableContact.id, name: contactName, username: contactUsername, phone: contactPhone })
      : onEditCancel();
  };

  const onChangeFieldsHander = (value, stateSetter) => {
    stateSetter(value);
    !hasUnsavedChanges && setUnsavedChanges(true);
  }

  return (
    <div className="overlay" ref={overlayElementRef} onClick={onOverlayClick}>
      <div className="edit-popup">
        <div className="popup-title">
          <div>
            <p>Edit contact: <b>{editableContact.name}</b></p>
            <span>{hasUnsavedChanges ? '⦿' : ''}</span>
          </div>
          <button onClick={onEditCancel}>ⓧ</button>
        </div>
        <div className="popup-fields">
          <input type="text" value={contactName} onChange={({ target }) => onChangeFieldsHander(target.value, setContactName)}></input>
          <input type="text" value={contactUsername} onChange={({ target }) => onChangeFieldsHander(target.value, setContactUsername)}></input>
          <input type="text" value={contactPhone} onChange={({ target }) => onChangeFieldsHander(target.value, setContactPhone)}></input>
        </div>
        <div className="popup-actions">
          <button onClick={onEditCancel}>Cancel</button>
          <button onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
