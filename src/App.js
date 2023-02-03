import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import { Signin, Signup } from './components/features/authentication';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
