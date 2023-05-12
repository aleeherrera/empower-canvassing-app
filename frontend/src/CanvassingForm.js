import React, { useState } from 'react';
import axios from 'axios';

function CanvassingForm() {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/canvassing', { name, notes });
      console.log(response.data); // Optional: Log the response for debugging

      // Reset the form fields
      setName('');
      setNotes('');
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div>
      <h2>Canvassing Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CanvassingForm;
