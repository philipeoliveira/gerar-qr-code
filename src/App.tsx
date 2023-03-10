import { Outlet } from 'react-router-dom';

import Logo from './assets/logo-gerar-qr-code.png';

import styles from './App.module.css';

function App() {
   return (
      <div className={`${styles.app} ${'flex-col-center'}`}>
         <header className='flex-col-center'>
            <img
               src={Logo}
               className={`${styles.logo} ${'flex-col-center'}`}
               alt='Logo Gerar QR Code'
            />
            <h1>Crie seu QR Code gratuitamente</h1>
         </header>
         <Outlet />
      </div>
   );
}

export default App;
