import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Header } from './shared-components';
import { Homepage, NotFoundPage } from './pages';
import { ContactsBook } from './modules';

import './App.css';


function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Router>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/contacts-book' element={<ContactsBook />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
