import React, { useState } from 'react';

function RegistrationForm() {
  // 1. State for form data (Individual controlled components)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // 2. State for validation errors (using setError to set a single error message)
  const [error, setError] = useState('');

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors at the start

    // --- Explicit Validation Checks ---
    
    // Check 1: Username required
    if (!username) {
      setError('Username is required.');
      return;
    }
    
    // Check 2: Email required
    if (!email) {
      setError('Email is required.');
      return;
    }

    // Check 3: Basic email format
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    // Check 4: Password required
    if (!password) {
      setError('Password is required.');
      return;
    }
    
    // --- End Validation Checks ---
    
    // If validation passes (no return occurred), proceed with submission
    console.log('Controlled Form Data Submitted:', { username, email, password });
    alert(`Registration successful for ${username}! (Simulated)`);

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
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
                    value={username} // Connected to state
                    onChange={(e) => { setUsername(e.target.value); setError(''); }} // Updates state and clears error
                    style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }}
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email} // Connected to state
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }}
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password} // Connected to state
                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
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
