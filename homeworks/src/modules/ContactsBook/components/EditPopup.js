import { useState } from 'react';

/**
 * @function EditPopup
 * @param editableContact
 * @param onEditComplete
 * @param onEditCancel
 * @returns JSX with EditPopup, with prepopulated data in inputs
 */
export function EditPopup({ editableContact, onEditComplete, onEditCancel }) {
  const [firstName, setFirstName] = useState(editableContact.firstName);
  const [lastName, setLastName] = useState(editableContact.lastName);
  const [phoneNumber, setPhoneNumber] = useState(editableContact.phoneNumber);
  const [hasUnsavedChanges, setUnsavedChanges] = useState('saved');

  const onSave = () => {
    hasUnsavedChanges && onEditComplete({ id: editableContact.id, firstName, lastName, phoneNumber });
  };

  const onChangeFieldsHander = (value, stateSetter) => {
    stateSetter(value);
    !hasUnsavedChanges && setUnsavedChanges(true);
  }

  return (
    <div className="overlay">
      <div className="edit-popup">
        <div className="popup-title">
          <div>
            <p>Edit contact: <b>{editableContact.firstName} {editableContact.lastName}</b></p>
            <span>{hasUnsavedChanges ? '⦿' : ''}</span>
          </div>
          <button onClick={onEditCancel}>ⓧ</button>
        </div>
        <div className="popup-fields">
          <input type="text" value={firstName} onChange={({ target }) => onChangeFieldsHander(target.value, setFirstName)}></input>
          <input type="text" value={lastName} onChange={({ target }) => onChangeFieldsHander(target.value, setLastName)}></input>
          <input type="text" value={phoneNumber} onChange={({ target }) => onChangeFieldsHander(target.value, setPhoneNumber)}></input>
        </div>
        <div className="popup-actions">
          <button onClick={onEditCancel}>Cancel</button>
          <button onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
