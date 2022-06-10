import {useState} from 'react';

export function EditPopup ({editableContact, onEditComplete}) {
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
        }

        setSavedIndicator('unsaved');
    }

    return (
        <div>
            <div className="popup-title">
                <h2>{editableContact.firstName} {editableContact.lastName}</h2>
                <button>ⓧ</button>
            </div>
            <div>
                <input type="text" value={firstName} onChange={({target}) => onChangeFieldsHander('firstName', target.value)}></input>
                <input type="text" value={lastName} onChange={({target}) => onChangeFieldsHander('lastName', target.value)}></input>
                <input type="text" value={phoneNumber} onChange={({target}) => onChangeFieldsHander('phoneNumber', target.value)}></input>
                <button onClick={onSave}>Save</button>
            </div>
        </div>
    );
}