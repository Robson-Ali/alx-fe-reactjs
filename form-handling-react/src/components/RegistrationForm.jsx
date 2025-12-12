import React, { useState } from 'react';

function RegistrationForm() {
  // State for form data (using individual useState variables)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for validation errors
  const [error, setError] = useState('');

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic Validation Check: Ensure no fields are empty
    if (!username || !email || !password) {
      setError('All fields must be filled out before registration.');
      return;
    }

    // Email format validation (simple check)
    if (!email.includes('@') || !email.includes('.')) {
        setError('Please enter a valid email address.');
        return;
    }

    // Simulation of API call
    console.log('Controlled Form Data Submitted:', { username, email, password });
    alert(`Registration successful for ${username}! (Simulated)`);

    // Reset form after successful submission
    setUsername('');
    setEmail('');
    setPassword('');
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
                    value={username} // Directly bound to username state
                    onChange={(e) => { setUsername(e.target.value); setError(''); }} // Individual setter
                    style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }}
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email} // Directly bound to email state
                    onChange={(e) => { setEmail(e.target.value); setError(''); }} // Individual setter
                    style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }}
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password} // Directly bound to password state
                    onChange={(e) => { setPassword(e.target.value); setError(''); }} // Individual setter
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