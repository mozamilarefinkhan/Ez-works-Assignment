import { useEffect, useState } from 'react';
import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import ClientContent from './Components/ClientContent';
import Sidebar from "./Components/Sidebar"
import Main from "./Components/Main"
import { data } from './data';
import { useStateValue } from './Components/context/StateProvider';
import { motion } from 'framer-motion'
import { app } from './Components/firebase.config';
import { actionType } from './Components/context/reducer';

function App() {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const [client, setClient] = useState(data[0]);
  const [mobileView, setView] = useState(false);
  const [clientSelected, selectClient] = useState(false);
  const widthManagement = () => {
    if (window.screen.width <= 640) {
      setView(true);
    }
    else setView(false);
  }
  window.addEventListener('resize', () => {
    widthManagement();
  })
  useEffect(() => {
    widthManagement();
  }, [])

  const login = async () => {
    if (!user) {
      const {
        // eslint-disable-next-line
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <div className="app">
      <div className='profile'>
        <div className='username'>{user ? user.displayName : <button className='login_button' onClick={login}>Login </button>}</div>
        <motion.img
          whileTap={{ scale: 0.6 }}
          src={user ? user.photoURL : 'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'}
          className=""
          alt="userprofile"
          onClick={login}
        />
        {
          isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="usermenu"
            >
              <p
                className="logout"
                onClick={logout}
              >
                Logout
              </p>
            </motion.div>
          )
        }
      </div>
      <Sidebar />
      {!mobileView && <><ClientContent setClient={setClient} selectClient={selectClient} />
        <Main client={client} /></>}
      {mobileView && clientSelected && <Main client={client} />}
      {mobileView && !clientSelected && <ClientContent setClient={setClient} selectClient={selectClient} />}

    </div>
  );
}

export default App;