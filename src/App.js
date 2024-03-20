import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

//<Route path="/orderreq/:orderId" exact element={<PrintTemplate />} />
//<Route path="/404" exact element={<NotFound />} />

function App() {
  return (
    <div className="Home">
      <header className="py-16"></header>
      <body className="App-body">
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
        </Routes>
      </Router>
      </body>
    </div>
    );
}

export default App;
