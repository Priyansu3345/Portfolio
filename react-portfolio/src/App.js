import './App.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Layout />} />
      </Router>
    </>
  );
}

export default App;
