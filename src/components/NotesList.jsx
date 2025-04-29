import { useState, useEffect } from 'react';
import { getNotes } from '../utils/storage';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Why useEffect to sync storage → state: 
  // We need to load data once when component mounts and handle potential errors
  useEffect(() => {
    try {
      const loadedNotes = getNotes();
      setNotes(loadedNotes);
    } catch (err) {
      setError('Failed to load notes. Please refresh the page.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading notes...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!notes.length) return <div>No notes yet. Add your first note!</div>;

  return (
    <div className="notes-list">
      <h2>Your Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content.length > 100 
              ? `${note.content.substring(0, 100)}...` 
              : note.content}</p>
            <small>{new Date(note.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;