import { Outlet } from 'react-router-dom';

import classes from './App.module.css';

function App() {
   return (
      <div className={`${classes.app} ${'flex-col-center'}`}>
         <header className='flex-col-center'>
            <img
               src='src/assets/logo-gerar-qr-code.png'
               className={`${classes.logo} ${'flex-col-center'}`}
               alt='Logo Gerar QR Code'
            />
            <h1>Crie seu QR Code gratuitamente</h1>
         </header>
         <Outlet />
      </div>
   );
}

export default App;
