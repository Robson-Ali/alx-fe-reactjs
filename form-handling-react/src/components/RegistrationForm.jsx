import React, { useState } from 'react';

function RegistrationForm() {
  // State for form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  // State for validation errors
  const [error, setError] = useState('');

  // Generic handler for all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error on input change
    setError('');
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic Validation Check: Ensure no fields are empty
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields must be filled out before registration.');
      return;
    }

    // Email format validation (simple check)
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
        setError('Please enter a valid email address.');
        return;
    }

    // Simulation of API call
    console.log('Controlled Form Data Submitted:', formData);
    alert(`Registration successful for ${formData.username}! (Simulated)`);

    // Reset form after successful submission
    setFormData({ username: '', email: '', password: '' });
    setError('');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '400px', margin: '20px auto' }}>
        <h2>Controlled Component Registration</h2>
        <form onSubmit={handleSubmit}>
            
            {/* Display general error message */}
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

            <div>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }}
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }}
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }}
                />
            </div>

            <button type="submit" style={{ padding: '10px 15px', marginTop: '15px', backgroundColor: 'teal', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Register
            </button>
        </form>
    </div>
  );
}

export default RegistrationForm;