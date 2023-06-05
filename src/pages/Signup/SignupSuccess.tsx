import React from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonCardContent, IonCard, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import styles from './SignupSuccess.module.css';

const SignupSuccess: React.FC = () => {
  const history = useHistory();
  const handleBack = () => {
    history.push('/login');
  };
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className={styles.container}>
          <IonCard>
              <IonCardContent>
                  <h1>Welcome!</h1>
                  <IonText className="ion-text-center">
                      <h3>Your signup was successful.</h3>
                  </IonText>
                  <IonButton shape="round" expand="block" onClick={handleBack} >Go to Login</IonButton>
              </IonCardContent>
            </IonCard>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default SignupSuccess;