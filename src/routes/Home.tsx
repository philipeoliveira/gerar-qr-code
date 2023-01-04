import { useState } from 'react';

import { QrcodeProps } from '../types/qrcode';

import Search from '../components/Search';
import QRCodeContainer from '../components/QRCodeContainer';

import classes from './Home.module.css';
import Footer from '../components/Footer';

const Home = () => {
   const [qrcode, setQrcode] = useState<QrcodeProps | null>(null);

   const loadQrcode = async (inputText: string) => {
      const res = await fetch(
         `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`
      );

      const { url } = res;

      const qrcodeData: QrcodeProps = {
         url,
      };

      setQrcode(qrcodeData);

      return url;
   };

   return (
      <div className={classes.home}>
         <Search loadQrcode={loadQrcode} />
         {qrcode && <QRCodeContainer url={qrcode.url} />}
         <Footer />
      </div>
   );
};

export default Home;
