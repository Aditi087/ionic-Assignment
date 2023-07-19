import React, { useState } from 'react';

import { IonButtons, IonLabel, IonList, IonPage } from '@ionic/react';
import { mainMenu } from './sidebarList';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { MdDoubleArrow } from 'react-icons/md';
import RightDrawer from '../drawer/RightDrawer';

interface RightDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar: React.FC<RightDrawerProps> = ({ open, setOpen }) => {
  const drawerWidth = 160;
  const [menuText, setMenuText] = useState<number | undefined>(0);
  // const [open, setOpen] = useState(false);
  console.log(open, 'hhhh');

  return (
    <IonPage>
      <div className="sidebar_body">
        <div id="sidebar">
          <IonLabel className="logo_div">LOGO</IonLabel>
          <IonList style={{ backgroundColor: 'transparent' }}>
            {mainMenu.map((e, index) => (
              <Link
                key={index}
                to={e?.link}
                onClick={() => {
                  setMenuText(index);
                }}
              >
                <div
                  style={{
                    paddingRight: '10px',
                    marginBottom: '1.4rem',
                    marginTop: '1.4rem',
                    display: 'flex',
                  }}
                >
                  <div
                    className={
                      'menu_item ' + (menuText === index && 'active_menu')
                    }
                  >
                    <IonLabel
                      className={
                        'menu_icon ' + (menuText === index && 'active_text')
                      }
                    >
                      {e?.icon}
                    </IonLabel>
                    <IonLabel
                      className={
                        'menu_text ' + (menuText === index && 'active_text')
                      }
                    >
                      {e?.text}
                    </IonLabel>
                  </div>
                </div>
              </Link>
            ))}
          </IonList>
        </div>

        <div className="header_div">
          <IonButtons
            slot="end"
            className="header_btn"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MdDoubleArrow
              className={'header_icon ' + (open === true && 'open_icon')}
            />
          </IonButtons>
        </div>
        <RightDrawer open={open} setOpen={setOpen} />
      </div>
    </IonPage>
  );
};

export default Sidebar;
