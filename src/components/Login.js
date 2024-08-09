import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';
const Login = () => {
    const [loginType, setLoginType] = useState('admin'); // Default login type
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            let response;

            switch (loginType) {
                case 'admin':
                    response = await axios.post('/api/admin/login', { email, password });
                    break;
                case 'jobseeker':
                    response = await axios.post('/api/jobseeker/login', { email, password });
                    break;
                case 'company':
                    response = await axios.post('/api/company/login', { email, password });
                    break;
                default:
                    throw new Error('Invalid login type');
            }

            if (response.status === 200) {
                // Handle successful login
                console.log('Login successful:', response.data);
                // Redirect or update UI based on response
            }
        } catch (error) {
            // Handle login error
            setError('Login failed. Please check your credentials.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="loginType">Login As:</label>
                    <select
                        id="loginType"
                        value={loginType}
                        onChange={(e) => setLoginType(e.target.value)}
                    >
                        <option value="admin">Admin</option>
                        <option value="jobseeker">Job Seeker</option>
                        <option value="company">Company</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
