import React, { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.module.css';

const Home: React.FC = () => {
  const history = useHistory();

  const goToDocumentPage = () => {
    history.push('/document');
  };

  const goToProfilePage = () => {
    history.push('/profile');
  };

  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    // Retrieve the user's full name from local storage
    const storedFirstName = localStorage.getItem('firstName');

    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>DASHBOARD</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h1>Welcome, {firstName}!</h1>

        <IonCard onClick={goToProfilePage} style={{ backgroundColor: '#C79C0E' }}>
          <IonCardHeader>
            <div className="logo-container2">
              <img src='src/assets/img/docu.png' alt="Logo" className="logo" />
            </div>
            <div className="header">
              <h1>Profile</h1>
            </div>
          </IonCardHeader>
        </IonCard>

        <IonCard onClick={goToDocumentPage} style={{ backgroundColor: '#C79C0E' }}>
          <IonCardHeader>
            <div className="logo-container2">
              <img src='src/assets/img/docu.png' alt="Logo" className="logo" />
            </div>
            <div className="header">
              <h1>Documents</h1>
            </div>
          </IonCardHeader>
        </IonCard>

        <IonCard onClick={goToProfilePage} style={{ backgroundColor: '#C79C0E' }}>
          <IonCardHeader>
            <IonCardSubtitle>Click to view</IonCardSubtitle>
            <IonCardTitle>Help Desk</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Access and update your profile information.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;