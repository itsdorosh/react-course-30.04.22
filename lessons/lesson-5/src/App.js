import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import { useLocalStorage } from './hooks';

import { filterContext } from './contexts/filterContext';
import { UserCard } from './UserCard';

function getTodo(id) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(response => response.json())
  .then(todo => console.log(todo));
}

function App() {
  const [list, setList] = useState([{ id: 1, title: 'Demo Item 1', completed: false }, { id: 2, title: 'Demo Item 2', completed: true }]);
  const [titleFilter, setTitleFilter] = useLocalStorage('title', '');
  const [statusFilter, setStatusFilter] = useLocalStorage('status', 'any');
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(list => setList(list));
  }, []);

  useEffect(() => {
    state = {titleFilter};
  });

  const filterListByTitlePredicate = useCallback((listItem, titleFilter) => listItem.title.includes(titleFilter), []);

  const filterListByStatusPredicate = (listItem, statusFilter) => statusFilter === "any"
    || (statusFilter === 'completed' && listItem.completed)
    || (statusFilter === 'not-completed' && !listItem.completed);

  const listItemMapper = (listItem) =>
    (<li style={{ fontSize: '12px', textAlign: 'left' }} key={listItem.id}>{JSON.stringify(listItem)}</li>);


  const mappedFilteredList = useMemo(() => list
    .filter((listItem) => filterListByTitlePredicate(listItem, titleFilter))
    .filter((listItem) => filterListByStatusPredicate(listItem, statusFilter))
    .map(listItemMapper),
    [list, titleFilter, statusFilter, filterListByTitlePredicate],
  );

  return (
    <filterContext.Provider value={titleFilter}>
    <div className="App">
      <header className="App-header">
        <h1>Lesson 5 - React Hooks</h1>
        <div>
          <input type='text' value={titleFilter} onChange={({ target }) => setTitleFilter(target.value)}></input>
          <select value={statusFilter} onChange={({ target }) => setStatusFilter(target.value)}>
            <option value="any">any</option>
            <option value="completed">completed</option>
            <option value="not-completed">not-completed</option>
          </select>
          <ul>
            {mappedFilteredList}
          </ul>
        </div>
      </header>
    </div>
    <UserCard />
    </filterContext.Provider>
  );
}

export default App;
