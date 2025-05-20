import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <h1 style={{color:"red"}}>Custom Note Service</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<AddNote />} />
          <Route path="/notes" element={<NotesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;