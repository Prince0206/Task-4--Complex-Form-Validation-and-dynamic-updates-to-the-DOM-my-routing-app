import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';

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

function About() {
  const [Self, setSelf] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic (e.g., make an API call, update state, etc.)
    console.log('Form submitted:', Self);
  };

  const handleUsernameChange = (event) => {
    setError(''); // Clear error message
    setSelf(event.target.value);
  };

  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <Label htmlFor="self">Tell Us About Yourself</Label>
          <br />
          <textarea
            name="self"
            value={Self}
            onChange={handleUsernameChange}
            rows="4"
            required
          />
          <br />
          <label htmlFor="image">Passport picture:</label>
          <Input
            type="file"
            id="image"
            name="image"
            placeholder="Insert Your Profile Picture"
            required
          />
          <br />
          <Button type="submit">Submit</Button>
        </FormContainer>
        {error && <div id="errorMessages">{error}</div>}
      </form>
    </>
  );
}

export default About;
