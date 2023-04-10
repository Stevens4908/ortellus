import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import loginbg from "../../images/bg-login.jpg";
import bg from "../../images/bg-1.jpg";

function ForgotPassword() {


    function validateForm() {
        return currentPassword.length >= 6 && password.length >= 6 && password === confirmPassword;
      }



  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('/api/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email, currentPassword, password, confirmPassword }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('An error occurred while resetting your password.'));
  }

  return (
<div className='login-main-page' style={{backgroundImage:"url("+ bg +")"}}>
  <div className='container login-wrapper2 mt-5 p-5 '  >
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className='text-white'>Email</Form.Label>
        <Form.Control
          type="email"
          
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCurrentPassword">
        <Form.Label className='text-white'>Contraseña Actual</Form.Label>
        <Form.Control
          type="password"
          
          value={currentPassword}
          onChange={event => setCurrentPassword(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className='text-white' >Nueva Contraseña</Form.Label>
        <Form.Control
          type="password"
          
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label className='text-white'>Confirma la Nueva Contraseña</Form.Label>
        <Form.Control
          type="password"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!validateForm(false)}>
        Aceptar
      </Button >
      {message && <div className="mt-3">{message}</div>}
    </Form></div>  </div>
  );
}

export default ForgotPassword