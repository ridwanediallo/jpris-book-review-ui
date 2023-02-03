import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Signup from './components/features/authentication/Signup';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Book review</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
