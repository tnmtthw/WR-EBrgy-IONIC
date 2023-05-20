import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonText, IonPage, IonToast } from '@ionic/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: email,
        password: password,
      });

      // Assuming the API response contains 'user' and 'access_token' fields
      const { user, access_token } = response.data;

      // Store the access token in local storage or Ionic Storage for later use
      localStorage.setItem('access_token', access_token);

      // Navigate to the desired page
      history.push('/folder/Home'); 

      // Show success toast message
      setToastMessage('Login successful');
      setShowToast(true);
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);

      // Show error toast message
      setToastMessage('Login failed');
      setShowToast(true);
    }
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          type="email"
          placeholder="Email"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
        ></IonInput>
        <IonInput
          type="password"
          placeholder='Password'
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
        ></IonInput>
        <IonButton expand="full" onClick={handleLogin}>
          Login
        </IonButton>
        <IonText className="ion-text-center">
          Don't have an account? <a href="/signup">Sign up</a>
        </IonText>
      </IonContent>
      <IonToast
        isOpen={showToast}
        message={toastMessage}
        duration={2000}
        onDidDismiss={handleToastClose}
      />
    </IonPage>
  );
};

export default Login;
