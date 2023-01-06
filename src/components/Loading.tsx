import styles from './Loading.module.css';

import { SpinnerGap } from 'phosphor-react';

const Loading = () => {
   return (
      <div className={`${styles.loader} ${'flex-col-center'}`}>
         <SpinnerGap size={32} />
      </div>
   );
};

export default Loading;
