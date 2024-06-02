import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('consumer');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { username, password, role });
            alert('Registration successful');
        } catch (err) {
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Role:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="consumer">Consumer</option>
                    <option value="provider">Provider</option>
                </select>
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
