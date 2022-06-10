import {useState} from 'react';
import {Search, ContactsList, EditPopup} from './components';

const list = [
    {id: 1, firstName: "Andrii", lastName: "D.", phoneNumber: "+123456789"},
    {id: 2, firstName: "Crocodile", lastName: "Gena", phoneNumber: "+123456789"},
    {id: 3, firstName: "Vasya", lastName: "LOL", phoneNumber: "+123456789"},
    {id: 4, firstName: "Dr.", lastName: "Stuart", phoneNumber: "+123456789"},
];

export function ContactsBook () {
    const [showPopup, setShowPopup] = useState(false);
    // TODO: SMART
    // list

    return (
        <>
            <h1>ContactsBook</h1>
            <Search placeholder={"Start type name..."} onSearchChange={(searchValue) => console.log(searchValue)} />
            <ContactsList contacts={list} />
            { showPopup
                ? <EditPopup editableContact={list[0]} onEditComplete={(changedContact) => {console.log(changedContact)}} />
                : <></>
            }
        </>
    );
}
