import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonButtons, IonContent, IonPage, IonInput, IonButton, IonSelect, IonSelectOption, IonToast, IonCard, IonCardContent, IonHeader, IonToolbar, IonMenuButton, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [sitio, setSitio] = useState('');

  useEffect(() => {
    // Retrieve the user's data from local storage
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedGender = localStorage.getItem('gender');
    const storedHouseNumber = localStorage.getItem('houseNumber');
    const storedStreetNumber = localStorage.getItem('streetNumber');
    const storedSitio = localStorage.getItem('sitio');

    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
    if (storedLastName) {
      setLastName(storedLastName);
    }
    if (storedGender) {
      setGender(storedGender);
    }
    if (storedHouseNumber) {
      setHouseNumber(storedHouseNumber);
    }
    if (storedStreetNumber) {
      setStreetNumber(storedStreetNumber);
    }
    if (storedSitio) {
      setSitio(storedSitio);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        houseNumber: houseNumber,
        streetNumber: streetNumber,
        sitio: sitio,
      };

      // Save the user's data to local storage
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('gender', gender);
      localStorage.setItem('houseNumber', houseNumber);
      localStorage.setItem('streetNumber', streetNumber);
      localStorage.setItem('sitio', sitio);

      // Send the form data to the server using axios
      await axios.post('/api/profile', userData);

      // Optionally, show a success message or redirect to another page
      console.log('Profile data submitted successfully');
      history.push('/dashboard'); // Replace '/dashboard' with the desired redirect URL
    } catch (error) {
      // Handle the error here
      console.error('Error submitting profile data', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonCard>
            <IonCardContent>
              <IonInput
                label="Firstname"
                placeholder="Firstname"
                value={firstName}
                labelPlacement="floating"
                onIonChange={(e) => setFirstName(e.detail.value!)}
              />
              <IonInput
                label="Lastname"
                placeholder="Lastname"
                value={lastName}
                labelPlacement="floating"
                onIonChange={(e) => setLastName(e.detail.value!)}
              />
              <IonSelect
                justify='start'
                label="Gender"
                placeholder="Select Gender"
                value={gender}
                labelPlacement="floating"
                onIonChange={(e) => setGender(e.detail.value)}
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
              />
              <IonInput
                label="Street Number"
                placeholder="Street Number"
                value={streetNumber}
                labelPlacement="floating"
                onIonChange={(e) => setStreetNumber(e.detail.value!)}
              />
              <IonInput
                label="Sitio"
                placeholder="Sitio"
                value={sitio}
                labelPlacement="floating"
                onIonChange={(e) => setSitio(e.detail.value!)}
              />
              <IonButton type="submit">Submit</IonButton>
            </IonCardContent>
          </IonCard>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Profile;