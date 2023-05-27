import React, { useState } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonInput, IonButton, IonSelect, IonSelectOption, IonToast, IonCard, IonCardContent, IonLoading, IonBackButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Signup.css';
import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
import { caretBack } from 'ionicons/icons';

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

    console.log('Firstname:', firstName);
    console.log('Lastname', lastName);
    console.log('Email:', email);
    console.log('Contact:', contactNumber);
    console.log('Birthday:', formattedBirthdateString);
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
      history.push('/login'); // Redirect to the main page
    } catch (error) {
      console.error('Signup failed:', error);
      setShowToast(true);
      setToastMessage('Signup failed. Please try again.');
    }

    setIsLoading(false); // Stop loading
  };

  const handleButtonClick = () => {
    history.push('/Login');
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="logo-container">
          <img src='src/assets/img/Logo.png' alt="Logo" className="logo" />
        </div>
        <IonCard>
        <IonBackButton icon={caretBack} className={styles.BackButton} defaultHref="/" text="Back"></IonBackButton>   
          <IonCardContent>
            <h1>Register</h1>
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit(signup)}>
              <IonInput
                label="Firstname"
                placeholder="Firstname"
                value={firstName}
                labelPlacement="floating"
                onIonChange={(e) => setFirstName(e.detail.value!)}
                className="custom-input" // Apply the custom class here
              />
              <IonInput
                label="Lastname"
                placeholder="Lastname"
                value={lastName}
                labelPlacement="floating"
                onIonChange={(e) => setLastName(e.detail.value!)}
                className="custom-input" // Apply the custom class here
              />
              <IonInput
                label="Email"
                placeholder="Email"
                value={email}
                labelPlacement="floating"
                onIonChange={(e) => setEmail(e.detail.value!)}
                className="custom-input" // Apply the custom class here
              />
              <IonInput
                label="Contact"
                type="tel"
                placeholder="09xxxxxxxx"
                value={contactNumber}
                labelPlacement="floating"
                onIonChange={(e) => setContactNumber(e.detail.value!)}
                className="custom-input" // Apply the custom class here
              />
              <IonInput
                label="Birthday"
                placeholder="Month DD, YYYY"
                value={birthdate}
                labelPlacement="floating"
                onIonChange={(e) => setBirthdate(e.detail.value!)}
                className="custom-input" // Apply the custom class here
              />
              <IonSelect
                justify='start'
                label="Gender"
                placeholder="Select Gender"
                value={gender}
                labelPlacement="floating"
                onIonChange={(e) => setGender(e.detail.value)}
                className="custom-input" // Apply the custom class here
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
                className="custom-input" // Apply the custom class here
              />
              <IonInput
                label="Street Name"
                placeholder="Street Name"
                value={streetNumber}
                labelPlacement="floating"
                onIonChange={(e) => setStreetNumber(e.detail.value!)}
                className="custom-input" // Apply the custom class here
              />
              <IonInput
                label="Sitio"
                placeholder="Sitio"
                value={sitio}
                labelPlacement="floating"
                onIonChange={(e) => setSitio(e.detail.value!)}
                className="custom-input" // Apply the custom class here
              />
              <h3>Create Password</h3>
              <IonInput
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                labelPlacement="floating"
                onIonChange={(e) => setPassword(e.detail.value!)}
                className="custom-input" // Apply the custom class here
              />
              <div className="button-container">
                <button type="submit" className="btn1">
                  Submit
                </button>
              </div>
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