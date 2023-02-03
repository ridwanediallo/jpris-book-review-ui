import { Routes, Route } from 'react-router-dom';

import { Signin, Signup } from './components/features/authentication';
import HomePage from './components/HomePage';
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
