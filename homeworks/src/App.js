import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from './shared-components';
import { DetailedCard, Homepage, NotFoundPage } from './pages';
import { ContactsBook } from './modules';
import { store } from './store';
import './App.css';


function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="content">
          <Router>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='contacts-book' element={<ContactsBook />} />
              <Route path='contacts-book/:id' element={<DetailedCard />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Router>
        </div>
      </Provider>
    </>
  );
}

export default App;
