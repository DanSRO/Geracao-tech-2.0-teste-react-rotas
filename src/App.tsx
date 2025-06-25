import { BrowserRouter as Router } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { User } from './components/User';
import { NotFound } from './components/NotFound';
const Home = lazy(()=>import('./components/Home'));
const FeedBackForm = lazy(()=>import('./components/FeedBackForm'));
const Contact = lazy(()=>import('./components/Contact'));

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={<p>loading ...</p>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/formulary" element={<FeedBackForm />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/user/:id" element={<User />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Layout>  
      </Suspense>
    </Router>      
    </>
  );
}

export default App;
