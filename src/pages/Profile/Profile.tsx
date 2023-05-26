import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonButtons, IonContent, IonPage, IonInput, IonButton, IonSelect, IonSelectOption, IonToast, IonCard, IonCardContent, IonHeader, IonToolbar, IonBackButton, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import styles from './Profile.module.css';
import { useForm } from 'react-hook-form';

const Profile: React.FC = () => {
  const { handleSubmit } = useForm();
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [sitio, setSitio] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        },
      });

      const userData = response.data;
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setGender(userData.gender);
      setHouseNumber(userData.houseNumber);
      setStreetNumber(userData.streetNumber);
      setSitio(userData.sitio);
    } catch (error) {
      console.error('Error fetching profile data', error);
    }
  };

  const update = async () => {
    try {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        houseNumber: houseNumber,
        streetNumber: streetNumber,
        sitio: sitio,
      };

      console.log('Firstname:', firstName);
      console.log('Lastname', lastName);
      console.log('Gender:', gender);
      console.log('House Number:', houseNumber);
      console.log('Street Number:', streetNumber);
      console.log('Sitio:', sitio);
  
      await axios.put('http://localhost:8000/api/update', userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        },
      });

      setToastMessage('Profile updated successfully!');
      setShowToast(true);

      history.push('/profile');
    } catch (error) {
      console.error('Error submitting profile data', error);

      setToastMessage('Failed to update profile.');
      setShowToast(true);
    }
  };  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Home" text="Home"></IonBackButton>
          </IonButtons>
          <IonTitle>PROFILE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(update)}>
          <IonCard>
            <IonCardContent>
              <IonInput
                label="Firstname"
                placeholder="Firstname"
                value={firstName}
                labelPlacement="floating"
                onIonChange={(e) => setFirstName(e.detail.value!)}
                className="custom-input"
              />
              <IonInput
                label="Lastname"
                placeholder="Lastname"
                value={lastName}
                labelPlacement="floating"
                onIonChange={(e) => setLastName(e.detail.value!)}
                className="custom-input"
              />
              <IonSelect
                justify='start'
                label="Gender"
                placeholder="Select Gender"
                value={gender}
                labelPlacement="floating"
                onIonChange={(e) => setGender(e.detail.value)}
                className="custom-input"
              >
                <IonSelectOption value="Male">Male</IonSelectOption>
                <IonSelectOption value="Female">Female</IonSelectOption>
                <IonSelectOption value="LGBT+">LGBT+</IonSelectOption>
              </IonSelect>
              <h3>Address</h3>
              <IonInput
                label="House Number"
                placeholder="House Number"
                value={houseNumber}
                labelPlacement="floating"
                onIonChange={(e) => setHouseNumber(e.detail.value!)}
                className="custom-input"
              />
              <IonInput
                label="Street Number"
                placeholder="Street Number"
                value={streetNumber}
                labelPlacement="floating"
                onIonChange={(e) => setStreetNumber(e.detail.value!)}
                className="custom-input"
              />
              <IonInput
                label="Sitio"
                placeholder="Sitio"
                value={sitio}
                labelPlacement="floating"
                onIonChange={(e) => setSitio(e.detail.value!)}
                className="custom-input"
              />
              <div className="button-container">
                <button type="submit" className="btn1">
                  Submit
                </button>
              </div>
            </IonCardContent>
          </IonCard>
        </form>
        <IonToast
          isOpen={showToast}
          message={toastMessage}
          duration={3000}
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Profile;