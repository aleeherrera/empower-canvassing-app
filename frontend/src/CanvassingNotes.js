import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CanvassingNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/canvassing');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <div>
      <h2>Canvassing Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.name}</h3>
            <p>{note.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CanvassingNotes;
