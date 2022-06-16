import {useState} from 'react';

export function EditPopup ({editableContact, onEditComplete, onEditCancel}) {
    const [firstName, setFirstName] = useState(editableContact.firstName);
    const [lastName, setLastName] = useState(editableContact.lastName);
    const [phoneNumber, setPhoneNumber] = useState(editableContact.phoneNumber);
    const [savedIndicator, setSavedIndicator] = useState('saved');

    const onSave = () => {
        savedIndicator === 'unsaved' && onEditComplete({
            id: editableContact.id,
            firstName,
            lastName,
            phoneNumber,
        });
    };

    const onChangeFieldsHander = (field, value) => {
        switch (field) {
            case 'firstName': {
                setFirstName(value);
                break;
            }
            case 'lastName': {
                setLastName(value);
                break;
            }
            case 'phoneNumber': {
                setPhoneNumber(value);
                break;
            }

            default: {
                throw new Error("Unsupported field");
            }
        }

        setSavedIndicator('unsaved');
    }

    return (
        <div className="overlay">
        <div className="edit-popup">
            <div className="popup-title">
                <div>
                    <p>Edit contact: <b>{editableContact.firstName} {editableContact.lastName}</b></p>
                    <span>{savedIndicator === "saved" ? '' : '⦿'}</span>
                </div>
                <button onClick={onEditCancel}>ⓧ</button>
            </div>
            <div className="popup-fields">
                <input type="text" value={firstName} onChange={({target}) => onChangeFieldsHander('firstName', target.value)}></input>
                <input type="text" value={lastName} onChange={({target}) => onChangeFieldsHander('lastName', target.value)}></input>
                <input type="text" value={phoneNumber} onChange={({target}) => onChangeFieldsHander('phoneNumber', target.value)}></input>
            </div>
            <div className="popup-actions">
                <button onClick={onEditCancel}>Cancel</button>
                <button onClick={onSave}>Save</button>
            </div>
        </div>
        </div>
    );
}
