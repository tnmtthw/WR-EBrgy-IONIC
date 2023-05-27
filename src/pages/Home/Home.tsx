import React, { useEffect, useState } from 'react';
import { IonButtons,IonAvatar, IonContent, IonHeader, IonBackButton, IonSearchbar, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.module.css';
import styles from './Home.module.css';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

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
      
      <IonToolbar className={styles.Toolbar}>
          <div className={styles.ToolbarContent}>
          <IonBackButton className={styles.BackButton} defaultHref="/" text=""></IonBackButton>
            <IonSearchbar className={styles.Search}></IonSearchbar>
            <IonMenuButton className={styles.Menu}></IonMenuButton>
          </div>
        </IonToolbar>
        
      <IonContent className="ion-padding">
      <IonAvatar className={styles.avatar}>
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar>
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