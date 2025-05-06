import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { FeedBackForm } from './components/FeedBackForm';
import { Contact } from './components/Contact';
import { Layout } from './layout/Layout';

function App() {
  return (
    <>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/formulary" element={<FeedBackForm />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Layout>  
    </Router>      
    </>
  );
}

export default App;
