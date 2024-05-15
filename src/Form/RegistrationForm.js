import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #b3ddf4;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  font-family: inherit;
  font-size: 20px;
  background: transparent;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  color: rgba(34, 34, 96, 0.9);

  &::placeholder {
    color: rgba(34, 34, 96, 0.4);
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    font-size: 24px;
  }
`;

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.length < 3) {
      setError('Username must be at least 3 characters long.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    // Handle form submission logic (e.g., make an API call, update state, etc.)
    console.log('Form submitted:', username, password);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError(''); // Clear error message
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(''); // Clear error message
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        {/* Other input fields */}
        <Input type="text" id="fullname" name="fullname" placeholder="Full Name" required />
        <Input type="number" id="age" name="age" placeholder="Age" required />
        <Input type="email" id="email" name="email" placeholder="Email" required />
        <Input type="number" id="phno" name="phno" placeholder="Phone Number" required />

        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <Button type="submit">Submit</Button>
      </FormContainer>
      {error && <div id="errorMessages">{error}</div>}
    </form>
  );
}

export default RegistrationForm;
