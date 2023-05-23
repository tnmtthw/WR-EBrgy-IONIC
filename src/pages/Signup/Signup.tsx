import React, { useState } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonInput, IonButton, IonSelect, IonSelectOption, IonToast, IonCard, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Signup: React.FC = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [sitio, setSitio] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSignup = () => {
    // Split the birthdate value into month, day, and year
    const [month, day, year] = birthdate.split(' ');

    // Manually construct the date object using the input values
    const formattedBirthdate = new Date(`${month} ${day}, ${year}`);

    // Adjust for the time zone offset
    const timezoneOffset = formattedBirthdate.getTimezoneOffset();
    formattedBirthdate.setMinutes(formattedBirthdate.getMinutes() - timezoneOffset);

    // Format the birthdate value to YYYY-MM-DD format
    const formattedBirthdateString = formattedBirthdate.toISOString().split('T')[0];

    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: contactNumber,
      birthdate: formattedBirthdateString,
      gender: gender,
      houseNumber: houseNumber,
      streetNumber: streetNumber,
      sitio: sitio,
      password: password,
    };

    axios
      .post('http://localhost:8000/api/signup', userData)
      .then((response) => {
        console.log(response.data);
        setFirstName('');
        setLastName('');
        setEmail('');
        setContactNumber('');
        setBirthdate('');
        setGender('');
        setHouseNumber('');
        setStreetNumber('');
        setSitio('');
        setPassword('');
        setShowToast(true);
        setToastMessage('Signup successful!');
        history.push('/login'); // Redirect to the main page
      })
      .catch((error) => {
        console.error('Signup failed:', error);
        setShowToast(true);
        setToastMessage('Signup failed. Please try again.');
      });
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <h1>Register</h1>
            <p>Create an Account</p>
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
            <IonInput
              label="Email"
              placeholder="Email"
              value={email}
              labelPlacement="floating"
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
            <IonInput
              label="Contact"
              type="tel"
              placeholder="0919701738"
              value={contactNumber}
              labelPlacement="floating"
              onIonChange={(e) => setContactNumber(e.detail.value!)}
            />
            <IonInput
              label="Birthday"
              placeholder="Month DD, YYYY"
              value={birthdate}
              labelPlacement="floating"
              onIonChange={(e) => setBirthdate(e.detail.value!)}
            />
            <IonSelect
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
              label="Street Name"
              placeholder="Street Name"
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
            <h3>Create Password</h3>
            <IonInput
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              labelPlacement="floating"
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
            <IonButton expand="block" onClick={handleSignup}>
              Signup
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={2000}
      />
    </IonPage>
  );
};

export default Signup;