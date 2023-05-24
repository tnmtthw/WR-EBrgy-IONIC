import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonText, IonPage, IonToast, IonCard, IonCardContent } from '@ionic/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Clear previous user's data from localStorage
    localStorage.removeItem('firstName');
    localStorage.removeItem('access_token');
  
    axios
      .post('http://localhost:8000/api/login', {
        email: email,
        password: password,
      })
      .then(response => {
        const { user, access_token } = response.data;
        const firstName = user.firstName;
        const lastName = user.lastName;
        const gender = user.gender;
        const houseNumber = user.houseNumber;
        const streetNumber = user.streetNumber;
        const sitio = user.sitio;
  
        // Save the new user's data to localStorage
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('gender', gender);
        localStorage.setItem('houseNumber', houseNumber);
        localStorage.setItem('streetNumber', streetNumber);
        localStorage.setItem('sitio', sitio);
        localStorage.setItem('access_token', access_token);
  
        setEmail('');
        setPassword('');
        // Navigate to the desired page
        history.push('/Home');
  
        // Show success toast message
        setToastMessage('Login successful');
        setShowToast(true);
      })
      .catch(error => {
        // Handle login error
        console.error('Login failed:', error);
  
        // Show error toast message
        setToastMessage('Login failed');
        setShowToast(true);
      });
  };
  
  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        
      <div className="logo-container">
      
          <img src='src/assets/img/Logo.png'alt="Logo" className="logo" />
              </div>
        <div className="container">
          <IonCard>
            <IonCardContent>
             
              <h1>Login</h1>
              
              <IonInput
                label="Email"
                type="email"
                value={email}
                labelPlacement="floating"
                fill="solid"
                placeholder="Enter Email"
                onIonChange={e => setEmail(e.detail.value!)}
                className="custom-input" // Apply the custom class here
              ></IonInput>

              <IonInput
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={password}
                labelPlacement="floating"
                onIonChange={e => setPassword(e.detail.value!)}
                className="custom-input" // Apply the custom class here
              ></IonInput>
              
              <div className="button-container">
                <button onClick={handleLogin} className="btn1">
                  Submit
                </button>
              </div>
            
              <div className="text-center">
                <IonText>
                  <p> Don't have an account? </p>
                  <a href="/signup">Sign up here</a>
                </IonText>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
