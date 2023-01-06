import { useState } from 'react';

import { QrcodeProps } from '../types/qrcode';

import Search from '../components/Search';
import Loading from '../components/Loading';
import QRCodeContainer from '../components/QRCodeContainer';
import Footer from '../components/Footer';

import classes from './Home.module.css';

const Home = () => {
   const [qrcode, setQrcode] = useState<QrcodeProps | null>(null);
   const [showLoading, setShowLoading] = useState(false);

   const loadQrcode = async (inputText: string) => {
      inputText && setShowLoading(true);

      const res = await fetch(
         `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`
      );

      res && setShowLoading(false);

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

         {showLoading && <Loading />}
         {qrcode && <QRCodeContainer url={qrcode.url} />}

         <Footer />
      </div>
   );
};

export default Home;
