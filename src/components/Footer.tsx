import styles from './Footer.module.css';

import { ArrowSquareOut } from 'phosphor-react';

const Footer = () => {
   return (
      <div className={`${styles.footer} ${'flex-col-center'}`}>
         <p>
            Desenvolvido por{' '}
            <a
               href='https://github.com/philipeoliveira'
               title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
               target='_blank'
            >
               Philipe Oliveira
               <ArrowSquareOut color={'var(--color-secondary)'} />
            </a>
         </p>
         <p>
            API utilizada:{' '}
            <a
               href='https://goqr.me/api/'
               title='Abrir em nova aba a documentação da API'
               target='_blank'
            >
               goqr.me/api
               <ArrowSquareOut color={'var(--color-secondary)'} />
            </a>
         </p>
      </div>
   );
};

export default Footer;
