import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Header text="React Feedback App" />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
