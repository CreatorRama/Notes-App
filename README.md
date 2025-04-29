# Custom Note Service

A simple note-taking app that persists data in localStorage.

## Features

- Add notes with title and content
- View all saved notes
- Responsive design
- Error handling for storage operations

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the app: `npm start`

## Design Decisions

### Storage Strategy
- **Why localStorage?** Simple client-side persistence without backend requirements
- **Key naming:** Used `custom-notes-app` to avoid conflicts with other apps

### Component Structure
- Separated AddNote and NotesList for single responsibility
- Created Nav component for routing between views

### State Management
- Used React's built-in useState and useEffect hooks
- No need for external state management in this small app

### Styling
- Plain CSS with utility-like classes for rapid development
- Focused on readability and mobile responsiveness

### Navigation
- Simple tab-based navigation using react-router-dom
- Minimalist approach suitable for the app's size