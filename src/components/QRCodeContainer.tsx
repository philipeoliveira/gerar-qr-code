import { QrcodeProps } from '../types/qrcode';

import classes from './QRCodeContainer.module.css';

const QRCodeContainer = ({ url }: QrcodeProps) => {
   return (
      <div className={`${classes.qrcode} ${'flex-col-center'}`}>
         <img src={url} id='img-qr-code' alt='Imagem com QR Code' />
      </div>
   );
};

export default QRCodeContainer;
