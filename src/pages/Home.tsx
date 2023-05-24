import React, { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';
const Home: React.FC = () => {
  const history = useHistory();

  const goToDocumentPage = () => {
    history.push('/document');
  };

  const goToProfilePage = () => {
    history.push('/profile');
  };

  const [firstName, setfirstName] = useState('');

  useEffect(() => {
    // Retrieve the user's full name from local storage
    const storedFirstName = localStorage.getItem('firstName');

    if (storedFirstName) {
      setfirstName(storedFirstName);
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

      <h1>Welcome, {firstName}!</h1>

      <IonCard onClick={goToProfilePage}>
        <IonCardHeader>
          <IonCardSubtitle>Click to view</IonCardSubtitle>
          <IonCardTitle>Profile</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Access and update your profile information.
        </IonCardContent>
      </IonCard>
    
      <IonCard onClick={goToDocumentPage}style={{ backgroundColor: '#C79C0E' }}>
        <IonCardHeader>
        <div className="logo-container2">
          <img src='src/assets/img/docu.png'alt="Logo" className="logo" />
        </div>
          <div className="header">
            <h1> Request Documents</h1>
           </div>
          </IonCardHeader>
          <div className="button1">  <button>Request Now</button> </div>
        </IonCard>
      
      <IonCard onClick={goToProfilePage}style={{ backgroundColor: '#C79C0E' }}>
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