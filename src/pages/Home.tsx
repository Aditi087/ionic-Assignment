import React, { useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonPage,
  IonSearchbar,
} from '@ionic/react';
import './Home.css';
import Sidebar from '../components/sidebar/Sidebar';
import { Paper } from '@mui/material';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  // console.log(open);
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState<string | null | undefined>('9876543210');
  const [search2, setSearch2] = useState<string | null | undefined>('');
  // console.log(search);

  return (
    <IonPage className="home">
      <Sidebar open={open} setOpen={setOpen} />

      <div style={{ height: '100vh' }}>
        <div
          style={{
            display: 'flex',
            height: '100%',
            backgroundColor: '#96969649',
            zIndex: 200,
            paddingLeft: '12rem',
          }}
        >
          <Paper
            style={{
              margin: 'auto',
              marginTop: '6rem',
              padding: '40px',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              minHeight: '50vh',
              height: 'fit-content',
              width: '90%',
            }}
          >
            <IonSearchbar
              className={'search_bar ' + (active === 1 && 'active_search')}
              value={search}
              onIonChange={(e) => setSearch(e.detail.value)}
              onClick={() => setActive(1)}
            ></IonSearchbar>
            <IonSearchbar
              placeholder="search user by name"
              value={search2}
              onIonChange={(e) => setSearch2(e.detail.value)}
              onClick={() => setActive(2)}
              // style={{ margin: 'auto' }}
              className={'search_bar ' + (active === 2 && 'active_search')}
            ></IonSearchbar>
            <IonButton fill="clear" className="search_btn">
              search
            </IonButton>
          </Paper>
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
