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
      <div className='News'style={{ color: 'black' ,
                      textAlign: 'center',
                      paddingTop:'5px', 
                      paddingBottom:'0px',
                      textTransform:'none',
                      width:'345px',
                      // background:'#FFC300',
                      marginTop:'0px',
                      marginLeft:'5px'
                      }}  >

      <h1 style={{ fontWeight: 'bold',
                      fontSize:'20px',
                      color:'#001D3D'}}>
                      Note: Please Click the Document you want to Request</h1>
                      </div>
      <IonGrid>
        <IonRow>
          <IonCol size="6" size-md="4" size-lg="2">
          <IonCard onClick={goToDocumentPage}  style={{ backgroundColor: '#57A8F2', height: '200px', width: '170px',marginLeft:'-5px',
          border:'solid 2px white' }}>
                <IonCardHeader>

                <button className="header1" style={{
                            background: '#FFC300',
                            height: '30px',
                            color: 'black',
                            fontWeight: 'bold',
                            borderRadius: '25px',
                            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                            transition: 'box-shadow 0.3s ease',
                            textDecoration: 'upperase',
                            cursor: 'pointer'
                          }}
                        
                          >
                            Barangay Clearance
                          </button>

                 
                  <div className="logo-container2"> 
                    <img src='src/assets/img/cle.png' alt="Logo" className="logo" />
                  </div>

                </IonCardHeader>
              </IonCard>
          </IonCol>
          <IonCol size="6" size-md="4" size-lg="2">
          <IonCard onClick={goToDocumentPage}  style={{ backgroundColor: '#57A8F2', height: '200px', width: '170px',marginLeft:'-5px',
          border:'solid 2px white' }}>
                <IonCardHeader>

                <button className="header1" style={{
                            background: '#FFC300',
                            height: '30px',
                            color: 'black',
                            fontWeight: 'bold',
                            borderRadius: '25px',
                            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                            transition: 'box-shadow 0.3s ease',
                            textDecoration: 'upperase',
                            cursor: 'pointer'
                          }}
                        
                          >
                            Barangay ID
                          </button>

                 
                  <div className="logo-container2"> 
                    <img src='src/assets/img/id2.png' alt="Logo" className="logo" />
                  </div>

                </IonCardHeader>
              </IonCard>
          </IonCol>
          <IonCol size="6" size-md="4" size-lg="2">
          <IonCard onClick={goToDocumentPage}  style={{ backgroundColor: '#57A8F2', height: '200px', width: '170px',marginLeft:'-5px',
          border:'solid 2px white' }}>
                <IonCardHeader>

                <button className="header1" style={{
                            background: '#FFC300',
                            height: '30px',
                            color: 'black',
                            fontWeight: 'bold',
                            borderRadius: '25px',
                            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                            transition: 'box-shadow 0.3s ease',
                            textDecoration: 'upperase',
                            cursor: 'pointer'
                          }}
                        
                          >
                            Certificate of Indigency
                          </button>

                 
                  <div className="logo-container2"> 
                    <img src='src/assets/img/res.png' alt="Logo" className="logo"
                    />
                  </div>

                </IonCardHeader>
              </IonCard>
          </IonCol>
          <IonCol size="6" size-md="4" size-lg="2">
          <IonCard onClick={goToDocumentPage}  style={{ backgroundColor: '#57A8F2', height: '200px', width: '170px',marginLeft:'-5px',
          border:'solid 2px white' }}>
                <IonCardHeader>

                <button className="header1" style={{
                            background: '#FFC300',
                            height: '30px',
                            color: 'black',
                            fontWeight: 'bold',
                            borderRadius: '25px',
                            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                            transition: 'box-shadow 0.3s ease',
                            textDecoration: 'upperase',
                            cursor: 'pointer'
                          }}
                        
                          >
                            Proof of Residency
                          </button>

                 
                  <div className="logo-container2"> 
                    <img src='src/assets/img/ind.png' alt="Logo" className="logo" />
                  </div>

                </IonCardHeader>
              </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
         
      </IonContent>
    </IonPage>
  );
};

export default Document;