import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    const history = useHistory();
    const handleLogout = () => {
      // Add logic to perform logout or navigate to the main page
      history.push('/');
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {/* Add your content here */}
          <div className="center-button">
            <IonButton onClick={handleLogout} expand="full" color="danger">Logout</IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default HomeOLD;
  