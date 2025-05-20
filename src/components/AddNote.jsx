import { useState } from 'react';
import { saveNote } from '../utils/storage';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    setIsSaving(true);
    const success = saveNote({
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString()
    });
    
    setIsSaving(false);
    
    if (success) {
      setTitle('');
      setContent('');
    } else {
      setError('Failed to save note. Please try again.');
    }
  };

  return (
    <div className="add-note">
      <h2 style={{color:"cornflowerblue"}}>Add New Note</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{color:"pink"}}>Title</label>
          <input
            type="text"
            value={title}
            style={{backgroundColor:"darkblue",color:"red"}}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={{color:"pink"}}>Content</label>
          <textarea
           style={{backgroundColor:"darkblue",color:"red"}}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Note'}
        </button>
        {/* Why show spinner here: To provide immediate feedback during the save operation */}
      </form>
    </div>
  );
};

export default AddNote;