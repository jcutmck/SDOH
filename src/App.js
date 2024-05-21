import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
//import UtForm from './pages/UtSdohForm';
//import FormTest from './pages/FormTemplateTest';
//import FormTest from './pages/FormTest';
//import SdohForm from './pages/SdohForm';
//import Success from './pages/Success';
//<Route path="/orderreq/:orderId" exact element={<PrintTemplate />} />
//<Route path="/404" exact element={<NotFound />} />
//<Route path="/utform" exact element={<SdohForm />} />
//<Route path="/success" exact element={<Success />} />
//<Route path="/fsform" exact element={<UtForm />} />

function App() {
  return (
    <div className="Home">
      <header className="py-16"></header>
      <div className="App-body">
        <Router>
          <Routes>
            <Route path="/" exact element={<LandingPage />} />

          </Routes>
        </Router>
      </div>
    </div>
    );
}

export default App;
