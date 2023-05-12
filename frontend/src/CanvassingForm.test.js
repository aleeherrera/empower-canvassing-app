import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import CanvassingForm from './CanvassingForm';

jest.mock('axios');

describe('CanvassingForm', () => {
  it('submits the form and calls the API endpoint', async () => {
    // Mock the Axios post method
    axios.post.mockResolvedValueOnce({ data: { message: 'Note created successfully' } });

    render(<CanvassingForm />);

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Notes:'), { target: { value: 'Lorem ipsum dolor sit amet' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Wait for the API call to resolve
    await waitFor(() => expect(Axios.post).toHaveBeenCalledTimes(1));

    // Verify the API endpoint was called with the correct data
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/create', {
      name: 'John Doe',
      notes: 'Lorem ipsum dolor sit amet',
    });

    // Verify the form fields are cleared after submission
    expect(screen.getByLabelText('Name:').value).toBe('');
    expect(screen.getByLabelText('Notes:').value).toBe('');

    // Verify the success message is displayed
    expect(screen.getByText('Note created successfully')).toBeInTheDocument();
  });

  it('handles API error and displays an error message', async () => {
    // Mock the Axios post method to simulate an error
    Axios.post.mockRejectedValueOnce(new Error('Failed to create a new note'));

    render(<CanvassingForm />);

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Notes:'), { target: { value: 'Lorem ipsum dolor sit amet' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Wait for the API call to reject
    await waitFor(() => expect(Axios.post).toHaveBeenCalledTimes(1));

    // Verify the error message is displayed
    expect(screen.getByText('Error creating a new note: Failed to create a new note')).toBeInTheDocument();
  });
});
