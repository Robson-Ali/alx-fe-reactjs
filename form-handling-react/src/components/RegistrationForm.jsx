import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // Object for multiple field-specific errors

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Collect all validation errors
    if (!username.trim()) newErrors.username = 'Username is required.';
    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!email.includes('@') || !email.includes('.')) newErrors.email = 'Please enter a valid email address.';
    if (!password.trim()) newErrors.password = 'Password is required.';

    setErrors(newErrors);

    // Stop submission if any errors exist
    if (Object.keys(newErrors).length > 0) return;

    // Success - submit form
    console.log('Registration Data:', { username, email, password });
    alert(`Registration successful for ${username}! (Simulated)`);

    // Reset form
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors({});
  };

  const handleChange = (field, value) => {
    // Clear specific field error on change
    setErrors(prev => ({ ...prev, [field]: '' }));
    // Update field value
    if (field === 'username') setUsername(value);
    else if (field === 'email') setEmail(value);
    else if (field === 'password') setPassword(value);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '400px', margin: '20px auto' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => handleChange('username', e.target.value)}
            style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }}
          />
          {errors.username && <p style={{ color: 'red', fontSize: '14px', margin: '2px 0' }}>{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => handleChange('email', e.target.value)}
            style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '14px', margin: '2px 0' }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => handleChange('password', e.target.value)}
            style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }}
          />
          {errors.password && <p style={{ color: 'red', fontSize: '14px', margin: '2px 0' }}>{errors.password}</p>}
        </div>

        <button 
          type="submit" 
          style={{ 
            padding: '10px 15px', 
            marginTop: '15px', 
            backgroundColor: 'teal', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
