import {useEffect} from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';

export function Contacts () {
    const match = useRouteMatch();
    console.log(match);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(res => console.log(res));
      }, []);

    return (
        <>
            <h1>Contacts Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur officia quod dolorum? Culpa nam ad, odio consequuntur nulla animi, ducimus, perspiciatis soluta vero sunt inventore dolor rerum ipsa fugit!</p>
            <Switch>
                <Route path={match.path + '/'}>Contact List</Route>
                <Route path={match.path + '/:id'}>One Contact</Route>
            </Switch>
        </>
    );
}