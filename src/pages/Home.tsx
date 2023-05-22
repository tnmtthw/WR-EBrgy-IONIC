import React, { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';

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

      <IonCard onClick={goToDocumentPage}>
        <IonCardHeader>
          <IonCardSubtitle>Click to view</IonCardSubtitle>
          <IonCardTitle>Document</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Explore and manage your documents here.
        </IonCardContent>
      </IonCard>

      <IonCard onClick={goToProfilePage}>
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