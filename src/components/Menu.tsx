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
import { homeOutline, homeSharp, personOutline, personSharp, logoFacebook, documentOutline, documentSharp, logOutOutline, logOutSharp } from 'ionicons/icons';
import './Menu.css';

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
    localStorage.removeItem('access_token');
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>West Rembo E-BRGY</IonListHeader>
          <IonNote>UrSerBisWR/</IonNote>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false} onClick={appPage.title === 'Logout' ? handleLogout : undefined}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
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