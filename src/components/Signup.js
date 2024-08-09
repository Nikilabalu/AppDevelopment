import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [role, setRole] = useState(''); // 'jobSeeker' or 'company'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Job Seeker specific fields
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [course, setCourse] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [experience, setExperience] = useState('');
  const [resume, setResume] = useState(null);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // Company specific fields
  const [companyName, setCompanyName] = useState('');
  const [companyLogo, setCompanyLogo] = useState(null);

  const navigate = useNavigate();

  const handleJobSeekerSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    if (!name || !degree || !course || !experience || !resume || !city || !country) {
      setMessage('Please fill out all fields');
      return;
    }
    // Mock API call
    console.log('Job Seeker Signing up with', { email, password, name, degree, course, isStudent, experience, resume, city, country });
    setMessage('Sign-up successful!');
    // Reset form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setDegree('');
    setCourse('');
    setIsStudent(false);
    setExperience('');
    setResume(null);
    setCity('');
    setCountry('');
  };

  const handleCompanySubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    if (!companyName || !companyLogo) {
      setMessage('Please fill out all fields');
      return;
    }
    // Mock API call
    console.log('Company Signing up with', { email, password, companyName, companyLogo });
    setMessage('Company Signup Successful! Now you can create your own job posts.');
    // Reset form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setCompanyName('');
    setCompanyLogo(null);
  };

  const handleSwitchToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <div className="button-container">
        <button type="button" onClick={() => setRole('jobSeeker')}>Job Seeker Sign Up</button>
        <button type="button" onClick={() => setRole('company')}>Company Sign Up</button>
      </div>
      <br/>
      {role && (
        <form onSubmit={role === 'jobSeeker' ? handleJobSeekerSubmit : handleCompanySubmit}>
          {role === 'jobSeeker' && (
            <>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label>Confirm Password:</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              <label>Degree:</label>
              <select value={degree} onChange={(e) => setDegree(e.target.value)} required>
                <option value="">Select Degree</option>
                <option value="BE">BE</option>
                <option value="BTECH">BTECH</option>
                <option value="Others">Others</option>
              </select>
              <br/>
              <label>Course Pursued:</label>
              <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required />
              <br/>
              <label>Are you a student?</label>
              <br/>
              <div>
                <label>
                  <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} />
                  Yes
                </label>
                <label>
                  <input type="checkbox" checked={!isStudent} onChange={(e) => setIsStudent(!e.target.checked)} />
                  No
                </label>
                <br/>
              </div>
              <label>Years of Experience:</label>
              <input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} required />
              <label>Resume:</label>
              <input type="file" onChange={(e) => setResume(e.target.files[0])} required />
              <label>City:</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
              <label>Country:</label>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
            </>
          )}
          {role === 'company' && (
            <>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label>Confirm Password:</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <label>Company Name:</label>
              <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
              <label>Company Logo:</label>
              <input type="file" onChange={(e) => setCompanyLogo(e.target.files[0])} required />
            </>
          )}
          <button type="submit">Sign Up</button>
          {message && <p>{message}</p>}
        </form>
      )}
      <div className="button-container">
        <button type="button" onClick={handleSwitchToLogin}>Already have an account? Login</button>
      </div>
    </div>
  );
};

export default Signup;
