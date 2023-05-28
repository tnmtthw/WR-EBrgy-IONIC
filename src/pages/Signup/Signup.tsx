import React, { useState } from 'react';
import axios from 'axios';
import { IonItem, IonLabel, IonRadio, IonRadioGroup, IonIcon, IonContent, IonPage, IonInput, IonButton, IonSelect, IonSelectOption, IonToast, IonCard, IonCardContent, IonLoading, IonBackButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Signup.css';
import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
import { caretBack, personOutline, mailOutline, callOutline, calendarOutline, maleOutline, femaleOutline, transgenderOutline, homeOutline, mapOutline, locationOutline, lockClosedOutline, womanOutline, male } from 'ionicons/icons';

const Signup: React.FC = () => {
  const { handleSubmit } = useForm();
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
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const signup = async () => {
    setIsLoading(true); // Start loading

    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: contactNumber,
      birthdate: birthdate,
      gender: gender,
      houseNumber: houseNumber,
      streetNumber: streetNumber,
      sitio: sitio,
      password: password,
    };

    console.log('Firstname:', firstName);
    console.log('Lastname', lastName);
    console.log('Email:', email);
    console.log('Contact:', contactNumber);
    console.log('Birthday:', birthdate);
    console.log('Gender:', gender);
    console.log('House Number:', houseNumber);
    console.log('Street Number:', streetNumber);
    console.log('Sitio:', sitio);
    console.log('Password:', password);

    try {
      const response = await axios.post('http://localhost:8000/api/signup', userData);
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
      history.push('/signupsuccess'); // Redirect to the main page
    } catch (error) {
      console.error('Signup failed:', error);
      setShowToast(true);
      setToastMessage('Signup failed. Please try again.');
    }

    setIsLoading(false); // Stop loading
  };

  const handleButtonClick = () => {
    history.push('/login');
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="logo-container">
          <img src='src/assets/img/Logo.png' alt="Logo" className="logo" />
        </div>
        <IonCard>
        <IonBackButton icon={caretBack} className={styles.backButton} defaultHref="/" text="Back"></IonBackButton>   
          <IonCardContent className={styles.cardContentContainer} > 
            {/* <h1>Register</h1> */}
            {/* <h2>Create an Account</h2> */}
            <form onSubmit={handleSubmit(signup)}>
              <IonInput
                label="First name"
                placeholder="First name"
                value={firstName}
                labelPlacement="floating"
                onIonChange={(e) => setFirstName(e.detail.value!)}
                className={`${styles['custom-input']} custom-input`}
              >
                <IonIcon slot="start" icon={personOutline} />
              </IonInput>
              <IonInput
                label="Last name"
                placeholder="Last name"
                value={lastName}
                labelPlacement="floating"
                onIonChange={(e) => setLastName(e.detail.value!)}
                className={`${styles['custom-input']} custom-input`}
              >
                <IonIcon slot="start" icon={personOutline} />
              </IonInput>
              <IonInput
                label="Email"
                placeholder="Email"
                value={email}
                labelPlacement="floating"
                onIonChange={(e) => setEmail(e.detail.value!)}
                className={`${styles['custom-input']} custom-input`}
              >
                <IonIcon slot="start" icon={mailOutline} />
              </IonInput>
              <IonInput
                label="Contact"
                type="tel"
                placeholder="09xxxxxxxx"
                value={contactNumber}
                labelPlacement="floating"
                onIonChange={(e) => setContactNumber(e.detail.value!)}
                className={`${styles['custom-input']} custom-input`}
              >
                <IonIcon slot="start" icon={callOutline} />
              </IonInput>
              <IonInput
                label="Birthday"
                type="date"
                value={birthdate}
                labelPlacement="floating"
                onIonChange={(e) => setBirthdate(e.detail.value!)}
                className={`${styles['custom-input']} custom-input`}
              >
                <IonIcon slot="start" icon={calendarOutline} />
              </IonInput>
              <h3>Gender</h3>
              <IonRadioGroup value={gender} onIonChange={(e) => setGender(e.detail.value)} >
              <IonItem className={styles.customRadio}>
                <IonIcon icon={maleOutline} slot="start" />
                <IonLabel>Male</IonLabel>
                <IonRadio slot="end" value="Male" />
              </IonItem>

              <IonItem className={styles.customRadio}>
                <IonIcon icon={femaleOutline} slot="start" />
                <IonLabel>Female</IonLabel>
                <IonRadio slot="end" value="Female" />
              </IonItem>

              <IonItem className={styles.customRadio}>
                <IonIcon icon={transgenderOutline} slot="start" />
                <IonLabel>LGBT+</IonLabel>
                <IonRadio slot="end" value="LGBT+" />
              </IonItem>
            </IonRadioGroup>
            <h3>Address</h3>
            <IonInput
              label="House Number"
              placeholder="House Number"
              value={houseNumber}
              labelPlacement="floating"
              onIonChange={(e) => setHouseNumber(e.detail.value!)}
              className={`${styles['custom-input']} custom-input`}
            >
              <IonIcon slot="start" icon={homeOutline} />
            </IonInput>
            <IonInput
              label="Street Name"
              placeholder="Street Name"
              value={streetNumber}
              labelPlacement="floating"
              onIonChange={(e) => setStreetNumber(e.detail.value!)}
              className={`${styles['custom-input']} custom-input`}
            >
              <IonIcon slot="start" icon={mapOutline} />
            </IonInput>
            <IonInput
              label="Sitio"
              type="number"
              placeholder="Sitio"
              value={sitio}
              labelPlacement="floating"
              onIonChange={(e) => setSitio(e.detail.value!)}
              className={`${styles['custom-input']} custom-input`}
            >
              <IonIcon slot="start" icon={locationOutline} />
            </IonInput>
              <h3>Create Password</h3>
            <IonInput
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              labelPlacement="floating"
              onIonChange={(e) => setPassword(e.detail.value!)}
              className={`${styles['custom-input']} custom-input`}
            >
              <IonIcon slot="start" icon={lockClosedOutline} />
            </IonInput>
            <IonButton type ="submit" shape="round" expand="block">Sign up</IonButton>
              {/* <div className="button-container">
                <button type="submit" className="btn1">
                  Submit
                </button>
              </div> */}
            </form>
            <div className="text-center">
              <p>Already have an Account?</p>
              <a onClick={handleButtonClick}>Sign in here</a>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonLoading
        isOpen={isLoading}
        message="Loading..."
        duration={3000}
        spinner="circles"
      />
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