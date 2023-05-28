import React, { useState } from 'react';
import { IonIcon, IonHeader, IonSearchbar, IonTitle, IonToolbar,IonButton, } from '@ionic/react';
import { mailOutline, lockClosedOutline, caretBack } from 'ionicons/icons';
import {
  IonContent,
  IonInput,
  IonPage,
  IonToast,
  IonCard,
  IonCardContent,
  IonLoading,
  IonBackButton,
} from '@ionic/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.css';
import { useForm } from 'react-hook-form';

const Login: React.FC = () => {
  const { handleSubmit } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const history = useHistory();

  const login = async () => {
    setIsLoading(true); // Start loading

    // Clear previous user's data from localStorage
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('gender');
    localStorage.removeItem('houseNumber');
    localStorage.removeItem('streetNumber');
    localStorage.removeItem('sitio');
    localStorage.removeItem('accessToken');

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: email,
        password: password,
      });

      const { user, accessToken } = response.data;
      const firstName = user.firstName;
      const lastName = user.lastName;
      const gender = user.gender;
      const houseNumber = user.houseNumber;
      const streetNumber = user.streetNumber;
      const sitio = user.sitio;

      // Save the new user's data to localStorage
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('email', email);
      console.log(localStorage.getItem('email'));
      localStorage.setItem('gender', gender);
      localStorage.setItem('houseNumber', houseNumber);
      localStorage.setItem('streetNumber', streetNumber);
      localStorage.setItem('sitio', sitio);
      localStorage.setItem('accessToken', accessToken);
      console.log(localStorage.getItem('accessToken'));

      setEmail('');
      setPassword('');
      // Navigate to the desired page
      history.push('/home');

      // Show success toast message
      setToastMessage('Login successful');
      setShowToast(true);
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);

      // Show error toast message
      setToastMessage('Login failed');
      setShowToast(true);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleBack = () => {
    history.push('/main');
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
      <div className="logo-container">
          <img src='src/assets/img/Logo.png' alt="Logo" className="logo" />
        </div>
        <div className="container">
          <IonCard>     
          <IonBackButton icon={caretBack} className={styles.backButton} onClick={handleBack} text="Back"></IonBackButton>   
            <IonCardContent className={styles.cardContentContainer} > 
              {/* <h1>LOGIN</h1> */}
              <form onSubmit={handleSubmit(login)}>
              <IonInput
                label="Email"
                type="email"
                value={email}
                labelPlacement="floating"
                // placeholder="Enter Email"
                onIonChange={(e) => setEmail(e.detail.value!)}
                className={`${styles['custom-input']} custom-input`}
              >
                <IonIcon slot="start" icon={mailOutline} />
              </IonInput>
              <IonInput
                label="Password"
                type="password"
                // placeholder="Enter Password"
                value={password}
                labelPlacement="floating"
                onIonChange={(e) => setPassword(e.detail.value!)}
                className={`${styles['custom-input']} custom-input`}
              >
                <IonIcon slot="start" icon={lockClosedOutline} />
              </IonInput>
              <IonButton type ="submit" shape="round" expand="block">Log in</IonButton>
              {/* // <div className="button-container">
              //   <button type="submit" className="btn1">
              //     LOGIN
              //   </button>
              // </div> */}
              </form>
              <div className="text-center">
                <p>Forget password?</p>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
      <IonLoading
        isOpen={isLoading}
        message="Loading..."
        duration={3000}
        spinner="circles"
      />
      <IonToast
        isOpen={showToast}
        message={toastMessage}
        duration={3000}
        onDidDismiss={() => setShowToast(false)}
      />
  
    </IonPage>
  );
};

export default Login;

 function Example() {
      return (
        <IonHeader>
          <IonToolbar>
            <IonTitle>Toolbar</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar></IonSearchbar>
          </IonToolbar>
        </IonHeader>
      );
    }
