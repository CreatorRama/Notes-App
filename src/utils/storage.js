const STORAGE_KEY = '1234';

export const getNotes = () => {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Failed to read notes from localStorage', error);
    return [];
  }
};

export const saveNote = (note) => {
  try {
    const notes = getNotes();
    const updatedNotes = [...notes, note];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
    return true;
  } catch (error) {
    console.error('Failed to save note to localStorage', error);
    return false;
  }
};