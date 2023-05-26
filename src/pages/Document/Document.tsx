import React, { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonBackButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Document: React.FC = () => {
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

  const handleCardClick = (title: string) => {
    console.log(`Clicked on card with title: ${title}`);
    // Perform any actions needed when a card is clicked
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Home" text="Home"></IonBackButton>
          </IonButtons>
          <IonTitle>DOCUMENT</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard onClick={() => handleCardClick('Barangay ID')} className="ion-text-center">
                <IonCardHeader>
                  <IonCardTitle>Barangay ID</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Description for Barangay ID
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard onClick={() => handleCardClick('Barangay Clearance')} className="ion-text-center">
                <IonCardHeader>
                  <IonCardTitle>Barangay Clearance</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Description for Barangay Clearance
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard onClick={() => handleCardClick('Barangay ID')} className="ion-text-center">
                <IonCardHeader>
                  <IonCardTitle>Barangay ID</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Description for Barangay ID
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard onClick={() => handleCardClick('Barangay Clearance')} className="ion-text-center">
                <IonCardHeader>
                  <IonCardTitle>Barangay Clearance</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Description for Barangay Clearance
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Document;