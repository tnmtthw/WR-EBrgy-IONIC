import React from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import styles from './Main.module.css';

const Main: React.FC = () => {
  const history = useHistory();

  const handleButtonClick1 = () => {
    history.push('/login');
  };

  const handleButtonClick2 = () => {
    history.push('/Signup');
  };

  return (
    <IonPage>
      <IonContent>
        <div className={styles.backgroundContainer}>
          <video autoPlay loop muted className={styles.backgroundVideo}>
            <source src="src/assets/video/makati25blur.mp4" type="video/mp4" />
          </video>
          <div className={styles.photoContainer}>
            <img src="src/assets/img/Logo.png" alt="Logo" className={styles.logo} />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <IonButton expand="full" color="primary" className={styles.transparentButton}>
            Continue with Facebook
          </IonButton>
          <IonButton onClick={handleButtonClick1} expand="full" color="danger" className={styles.transparentButton}>
            Login
          </IonButton>
          <IonButton onClick={handleButtonClick2} expand="full" color="dark" className={styles.transparentButton}>
            Create Account
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;