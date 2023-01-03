import { useState } from 'react';

import Search from '../components/Search';

import classes from './Home.module.css';

type qrcodeProps = {
   url: string;
};

const Home = () => {
   const [qrcode, setQrcode] = useState<qrcodeProps | null>(null);

   const loadQrcode = async (inputText: string) => {
      const res = await fetch(
         `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`
      );

      const { url } = res;

      const qrcodeData: qrcodeProps = {
         url,
      };

      setQrcode(qrcodeData);

      return url;
   };

   return (
      <div className={classes.home}>
         <Search loadQrcode={loadQrcode} />
         {qrcode && (
            <img src={qrcode.url} id='img-qr-code' alt='Imagem com QR Code' />
         )}
      </div>
   );
};

export default Home;
