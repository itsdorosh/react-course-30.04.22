import './App.css';
import { Todo } from './TodoModule/Todo';
import {Contacts} from './ContactsModule/Contacts';

let title = "First Title";

function App() {
  return (
    <>
      <Todo />
      <Contacts title={title} />
    </>
  );
}

export default App;
