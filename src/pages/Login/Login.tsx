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
  
        // Save the new user's data to localStorage
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('gender', gender);
        localStorage.setItem('houseNumber', houseNumber);
        localStorage.setItem('streetNumber', streetNumber);
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
        <div className="container">
          <IonCard>
            <IonCardContent>
              <h1>Login</h1>
              <p>Sign in your account</p>
              <IonInput
                label="Email"
                type="email"
                value={email}
                labelPlacement="floating"
                placeholder="Email"
                onIonChange={e => setEmail(e.detail.value!)}
              ></IonInput>
              <IonInput
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                labelPlacement="floating"
                onIonChange={e => setPassword(e.detail.value!)}
              ></IonInput>
              <IonButton expand="block" onClick={handleLogin}>
                Login
              </IonButton>
              <IonText>
                Don't have an account? <a href="/signup">Sign up</a>
              </IonText>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
      <IonToast isOpen={showToast} message={toastMessage} duration={2000} onDidDismiss={handleToastClose} />
    </IonPage>
  );
};

export default Login;