import { useState, useEffect } from "react";

let countOfRerenders = 1;

export function Contacts (props) {
    const [list, setList] = useState([{test: 1}]);
    const [priority, setPriority] = useState(false);
    
    useEffect(() => {
        console.log('Hello from useEffect');
    }, []);

    useEffect(() => {
        console.log('What\'s up from useEffect?');
        return () => {
            console.log("Goodbye from useEffect");
        };
    });

    // this will re-render our component each 3000ms
    setTimeout(() => {
        setPriority(!priority);
        setList([...list, {test: ++countOfRerenders}]);
    }, 3000);

    return (
        <>
            <h2>{props.title}</h2>
            <ul>
                { list.map((item, index) => (<li key={index}>{item.test}</li>)) }
            </ul>
        </>
    );
}
