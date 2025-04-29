import { useState, useEffect } from 'react';
import { getNotes } from '../utils/storage';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedNotes, setExpandedNotes] = useState({});
  const [hoveredNoteId, setHoveredNoteId] = useState(null);

  useEffect(() => {
    try {
      const loadedNotes = getNotes();
      setNotes(loadedNotes);
      
      const initialExpandedState = {};
      loadedNotes.forEach(note => {
        initialExpandedState[note.id] = false;
      });
      setExpandedNotes(initialExpandedState);
    } catch (err) {
      setError('Failed to load notes. Please refresh the page.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleNoteExpansion = (noteId) => {
    setExpandedNotes(prev => ({
      ...prev,
      [noteId]: !prev[noteId]
    }));
  };

  if (loading) return <div className="loading">Loading notes...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!notes.length) return <div className="empty">No notes yet. Add your first note!</div>;

  return (
    <div className="notes-list">
      <h2>Your Notes</h2>
      <ul>
        {notes.map((note) => {
          const isTruncated = note.content.length > 100 && !expandedNotes[note.id];
          return (
            <li 
              key={note.id} 
              className="note-item"
              onMouseEnter={() => isTruncated && setHoveredNoteId(note.id)}
              onMouseLeave={() => setHoveredNoteId(null)}
            >
              <h3>{note.title}</h3>
              <div 
                className={`note-content ${expandedNotes[note.id] ? 'expanded' : 'truncated'}`}
                onClick={() => toggleNoteExpansion(note.id)}
              >
                {expandedNotes[note.id] ? (
                  <p>{note.content}</p>
                ) : (
                  <p>
                    {note.content.length > 100 
                      ? `${note.content.substring(0, 100)}...` 
                      : note.content}
                  </p>
                )}
              </div>
              {isTruncated && hoveredNoteId === note.id && (
                <div className="tooltip">Click on Text to expand</div>
              )}
              <small>{new Date(note.createdAt).toLocaleString()}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NotesList;