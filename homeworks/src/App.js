import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './shared-components';
import { Homepage, NotFoundPage } from './pages';


function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Router>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
