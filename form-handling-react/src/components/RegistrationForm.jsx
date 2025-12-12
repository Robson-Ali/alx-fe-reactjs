import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required.';
    if (!email) newErrors.email = 'Email is required.';
    else if (!email.includes('@') || !email.includes('.')) newErrors.email = 'Please enter a valid email address.';
    if (!password) newErrors.password = 'Password is required.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log('Registration Data:', { username, email, password });
    alert(`Registration successful for ${username}!`);
    setUsername(''); setEmail(''); setPassword(''); setErrors({});
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '400px', margin: '20px auto' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" name="username" type="text" value={username} onChange={(e) => { setUsername(e.target.value); setErrors(prev => ({ ...prev, username: '' })); }} style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }} />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: '' })); }} style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); setErrors(prev => ({ ...prev, password: '' })); }} style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }} />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit" style={{ padding: '10px 15px', marginTop: '15px', backgroundColor: 'teal', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
