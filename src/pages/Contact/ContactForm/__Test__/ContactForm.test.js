import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from './ContactForm'; // Adjust the import path as necessary

// Unit test for ContactForm component
describe('ContactForm Component Tests', () => {
  // Test to check if the ContactForm renders without crashing
  it('renders without crashing', () => {
    render(<ContactForm />);
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  // Test to check if form inputs are initially empty
  it('initial inputs should be empty', () => {
    render(<ContactForm />);
    const nameInput = screen.getByPlaceholderText('Name');
    const surnameInput = screen.getByPlaceholderText('Surname');
    // Add other inputs as necessary
    expect(nameInput.value).toBe('');
    expect(surnameInput.value).toBe('');
    // Add assertions for other inputs
  });

  // Test to check form submission with valid data
  it('allows form submission with valid data', async () => {
    render(<ContactForm />);
    const nameInput = screen.getByPlaceholderText('Name');
    const surnameInput = screen.getByPlaceholderText('Surname');
    // Fill in the inputs with valid data
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    // Add changes for other inputs as necessary

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    // Assuming there's a message or action that occurs on successful submission
    expect(await screen.findByText(/success message or action/)).toBeInTheDocument();
  });

  // Test to check form validation for required fields
  it('validates required fields', async () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    // Assuming the form shows error messages for required fields
    expect(await screen.findByText(/name is required/)).toBeInTheDocument();
    expect(await screen.findByText(/surname is required/)).toBeInTheDocument();
    // Add separate findBy blocks for other required field validations
  });
});

