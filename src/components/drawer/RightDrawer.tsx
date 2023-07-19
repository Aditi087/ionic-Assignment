import React from 'react';
import Drawer from '@mui/material/Drawer';
import { IonAlert, IonButton, IonButtons, IonPage } from '@ionic/react';
import { Paper } from '@mui/material';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import './drawer.css';

interface RightDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const RightDrawer: React.FC<RightDrawerProps> = ({ open, setOpen }) => {
  const drawerWidth = 440;
  console.log(open, 'gggggg');

  return (
    <Drawer
      variant="temporary"
      anchor={'right'}
      open={open}
      onClose={() => setOpen(!open)}
      sx={{
        width: '100%',
        backgroundColor: '#0c0c0c34',
        marginTop: '3rem',
        // display: 'flex',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          marginTop: '3rem',
          boxShadow: 'none',
          backgroundColor: 'transparent',
        },
      }}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        <IonButtons
          slot="end"
          className="modal_btn"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <IoIosArrowDroprightCircle
            className={'header_icon ' + (open === true && 'open_icon')}
          />
        </IonButtons>
        <Paper
          sx={{
            width: drawerWidth,
            height: '100%',
            boxShadow: 'none',
            backgroundColor: 'whitesmoke',
            borderTop: '1.5px solid #43434380',
            padding: '2rem',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          aliquid dignissimos, quasi tenetur doloremque, vitae eum ea expedita
          commodi voluptatum vero quas! Vero magni culpa accusantium cumque
          vitae ducimus veniam laudantium quidem, excepturi at nesciunt,
          cupiditate ipsa minima autem expedita, harum soluta deleniti adipisci.
          Iste asperiores distinctio minus quibusdam officiis eius voluptatibus
          dicta quasi corrupti necessitatibus pariatur officia, commodi, eum est
          rerum saepe illum, assumenda nulla? Minus voluptatem non a aliquid
          quo, recusandae at assumenda amet, perspiciatis consequatur harum illo
          obcaecati ea, consequuntur tenetur quaerat. Non nisi, dicta ducimus a
          ipsam, recusandae voluptatum delectus error distinctio illo esse.
          Inventore, eius?
          <div style={{ marginTop: '20px' }}>
            <IonButton id="present-alert" color="warning">
              Warning
            </IonButton>
            <IonButton color="danger">Danger</IonButton>
            <IonButton color="light">Light</IonButton>
            <IonButton color="medium">Medium</IonButton>
            <IonButton color="dark">Dark</IonButton>
            <IonAlert
              trigger="present-alert"
              header="Alert"
              subHeader="Important message"
              message="This is an alert!"
              buttons={['OK']}
            ></IonAlert>
          </div>
        </Paper>
      </div>
    </Drawer>
  );
};

export default RightDrawer;
