import React, { useEffect, useState } from 'react';
import { IonButtons,IonAvatar,IonButton, IonContent, IonHeader, IonBackButton, IonSearchbar, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.module.css';
import styles from './Home.module.css';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

const Home: React.FC = () => {
  const history = useHistory();

  const goToDocumentPage = () => {
    history.push('/document');
  };

  const goToProfilePage = () => {
    history.push('/profile');
  };

  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    // Retrieve the user's full name from local storage
    const storedFirstName = localStorage.getItem('firstName');

    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  return (
    <IonPage>
      
      <IonToolbar className={styles.Toolbar}>

          <div className={styles.ToolbarContent}>

                  <IonBackButton className={styles.BackButton} defaultHref="/" text=""></IonBackButton>
                  <IonSearchbar className={styles.Search}></IonSearchbar>
                  <IonMenuButton className={styles.Menu}></IonMenuButton>
          </div>

      </IonToolbar>

        {/* HEADER */}


      <IonContent className="ion-padding">
              <div className='News'style={{ color: 'black' ,
                            textAlign: 'center',
                            paddingTop:'5px', 
                            paddingBottom:'0px',
                            textTransform:'uppercase',
                            width:'345px',
                            // background:'#FFC300',
                            marginTop:'0px',
                            marginLeft:'5px'
                            }}  >

            <h1 style={{ fontWeight: 'bold',
                            fontSize:'20px',
                            color:'#001D3D'}}>
                            SERVICES</h1>
                            </div>

                            
              {/* END HEADER */}


              <IonGrid>
                <IonRow>
                  <IonCol size="6" size-md="4" size-lg="2">
                  <IonCard onClick={goToProfilePage} 

                  style={{ 
                        backgroundColor: '#024AA2', 
                        height: '200px', 
                        width: '170px', 
                        marginLeft:'-5px',
                        border:'solid 2px white'
                        }}>

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
                                    > User Edit Profile </button>

                            <div className="logo-container2"> 
                              <img src='src/assets/img/user.png' alt="Logo" className="logo" />
                            </div>

                        </IonCardHeader>
                      </IonCard>
                  </IonCol>

                  <IonCol size="6" size-md="4" size-lg="2">
                      <IonCard onClick={goToDocumentPage}  
                                  style={{ 
                                    backgroundColor: '#024AA2', 
                                    height: '200px', 
                                    width: '170px',
                                    marginLeft:'-5px',
                                    border:'solid 2px white'}}>
                  
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
                                        > Request Document
                                        </button>
                                
                                            <div className="logo-container2"> 
                                              <img src='src/assets/img/docu.png' alt="Logo" className="logo" />
                                            </div>
                        </IonCardHeader>
                    </IonCard>
                    
                  </IonCol>
                  <IonCol size="6" size-md="4" size-lg="2">
                  <IonCard onClick={goToDocumentPage} 
                                  style={{ backgroundColor: '#024AA2',
                                  height: '200px',
                                  width: '170px',
                                  marginLeft:'-5px',
                                  border:'solid 2px white'
                                  }}>
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
                                  >Help Desk
                                  </button>

                                    <div className="logo-container2"> 
                                      <img src='src/assets/img/help2.png' alt="Logo" className="logo" />
                                    </div>

                    </IonCardHeader>
                    
                    </IonCard>
                        </IonCol>
                            <IonCol size="6" size-md="4" size-lg="2">
                                <IonCard onClick={goToDocumentPage}  
                                            style={{ backgroundColor: '#024AA2',
                                                          height: '200px',
                                                          width: '170px',
                                                          marginLeft:'-5px',
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
                                                    > Send Complaints</button>
                          <div className="logo-container2"> 
                            <img src='src/assets/img/send.png' alt="Logo" className="logo" />
                          </div>

                        </IonCardHeader>
                      </IonCard>
                    </IonCol>
                </IonRow>
              </IonGrid>

              <div className='News'style={{ color: 'black' ,
                              textAlign: 'center',
                              paddingTop:'5px', 
                              paddingBottom:'10px',
                              textTransform:'uppercase',
                              width:'345px',
                              // background:'#FFC300',
                              marginTop:'20px',
                              marginLeft:'5px'
                              }}  >

              <h1 style={{ fontWeight: 'bold',
                              fontSize:'20px',
                              color:'#001D3D'}}>
                              News and Announcements</h1>
                              </div>
                              
              <IonCard style={{ width: '340px',marginLeft:'9px'}} >
            
              <img alt="Silhouette of mountains" src='src/assets/img/vote.png' className="news"  />

                  <IonCardHeader>
                          <IonCardTitle>Election 2023</IonCardTitle>
                          <IonCardSubtitle>Vote Wisely in</IonCardSubtitle>
                </IonCardHeader>

                          <IonCardContent style={{ color: 'white', textAlign: 'justify', paddingTop:'20px' ,background:'#024AA2'}} 
                            
                            >The BSKE polls were initially scheduled for December 5, 2022 before it was moved to October 30, 2023.
                              Based on the calendar of activities released by the Comelec, the election period will begin on July 3 
                              until Nov. 14, simultaneous with the beginning of the filing of Certificate of Candidacy from July 3 to 7.
                              Meanwhile, the voting hours for the election day, which will be on the last Monday of October, will be from 
                              7:00 a.m. to 3:00 p.m.

                          </IonCardContent>
                </IonCard>

                <IonButton 
                        style={{ 
                          color: 'white', 
                          width:'150px',
                          marginLeft:'25%',}}
                          >Read More</IonButton>

            <IonCard style={{ width: '340px',marginLeft:'9px'}} >
                  <img alt="Silhouette of mountains" src='src/assets/img/cleanup.jpg' className="news"  />
                      <IonCardHeader>

                        <IonCardTitle>Clean and Green</IonCardTitle>
                        <IonCardSubtitle>Be responsible</IonCardSubtitle>

          </IonCardHeader>

                <IonCardContent style={{ color: 'white', textAlign: 'justify', paddingTop:'20px' ,background:'#024AA2'}} 
                    >What Is a Community Cleanup? A community cleanup brings volunteers together to clean, repair, 
                    and improve public spaces or other areas such as vacant lots or abandoned properties
                    that have been neglected, vandalized, or misused.
                </IonCardContent>

            </IonCard>
                  <IonButton style={{
                      color: 'white', 
                      width:'150px',
                      marginLeft:'25%'}}
            > Read More </IonButton>
      
        </IonContent>
 </IonPage>
    
    
  );
};

export default Home;