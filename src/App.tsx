import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Sidebar from './components/sidebar/Sidebar';
import RightDrawer from './components/drawer/RightDrawer';

setupIonicReact();

const App: React.FC = () => {
  // const [open, setOpen] = useState(false);
  // console.log(open);
  return (
    <IonApp className="app">
      <IonReactRouter>
        <IonRouterOutlet>
          {/* <Route> */}
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          {/* </Route> */}
        </IonRouterOutlet>
        {/* <Sidebar open={open} setOpen={setOpen} /> */}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
