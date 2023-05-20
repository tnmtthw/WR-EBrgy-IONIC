import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonText } from '@ionic/react';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signing up...');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign up</IonTitle>
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
          placeholder="Password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
        ></IonInput>
        <IonInput
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onIonChange={(e) => setConfirmPassword(e.detail.value!)}
        ></IonInput>
        <IonButton expand="full" onClick={handleSignup}>
          Sign up
        </IonButton>
        <IonText className="ion-text-center">
          Already have an account? <a href="/login">Log in</a>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Signup;