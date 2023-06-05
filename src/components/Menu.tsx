import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import {
  homeOutline,
  homeSharp,
  personOutline,
  personSharp,
  logoFacebook,
  documentOutline,
  documentSharp,
  logOutOutline,
  logOutSharp,
} from 'ionicons/icons';
import styles from './Menu.module.css';

interface AppPage {
  title: string;
  url: string;
  iosIcon: string;
  mdIcon: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Profile',
    url: '/profile',
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
  {
    title: 'Document',
    url: '/document',
    iosIcon: documentOutline,
    mdIcon: documentSharp,
  },
  {
    title: 'Facebook',
    url: '/folder/facebook',
    iosIcon: logoFacebook,
    mdIcon: logoFacebook,
  },
  {
    title: 'Logout',
    url: '/',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  const handleLogout = () => {
    // Clear the localStorage when logout is clicked
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('gender');
    localStorage.removeItem('houseNumber');
    localStorage.removeItem('streetNumber');
    localStorage.removeItem('sitio');
    localStorage.removeItem('email');
    localStorage.removeItem('accessToken');
  };

  const [firstName, setFirstName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    const storedEmail = localStorage.getItem('email');

    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <IonMenu side="end" contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list" className={styles['menu-list']} style={{ backgroundColor: '#FFC300' }}>
          <div className="logo-container">
            <img src="src/assets/img/Logo.png" alt="Logo" className="logo" />
          </div>
          <h1>Welcome, {firstName}!</h1>
          <p>{email}</p>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false} onClick={appPage.title === 'Logout' ? handleLogout : undefined}>
              <IonItem className={`${styles['menu-list']} ${location.pathname === appPage.url ? 'selected' : ''}`} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;