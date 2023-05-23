import React, { useState } from 'react';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

const Docu1_BarangayID: React.FC = () => {
  const [reason, setReason] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [houseOwner, setHouseOwner] = useState('');
  const [residencyPeriod, setResidencyPeriod] = useState('');
  const [relationshipToOwner, setRelationshipToOwner] = useState('');
  const [registeredVoter, setRegisteredVoter] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Document</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Document Details</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel position="floating">Reason for Requesting</IonLabel>
                <IonInput
                  value={reason}
                  onIonChange={(e) => setReason(e.detail.value!)}
                  required
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Place of Birth</IonLabel>
                <IonInput
                  value={placeOfBirth}
                  onIonChange={(e) => setPlaceOfBirth(e.detail.value!)}
                  required
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">House Owner</IonLabel>
                <IonInput
                  value={houseOwner}
                  onIonChange={(e) => setHouseOwner(e.detail.value!)}
                  required
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Period of Residency</IonLabel>
                <IonInput
                  value={residencyPeriod}
                  onIonChange={(e) => setResidencyPeriod(e.detail.value!)}
                  required
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Relationship to the Owner</IonLabel>
                <IonInput
                  value={relationshipToOwner}
                  onIonChange={(e) => setRelationshipToOwner(e.detail.value!)}
                  required
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Registered Makati City Voter</IonLabel>
                <IonInput
                  value={registeredVoter}
                  onIonChange={(e) => setRegisteredVoter(e.detail.value!)}
                  required
                ></IonInput>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Docu1_BarangayID;