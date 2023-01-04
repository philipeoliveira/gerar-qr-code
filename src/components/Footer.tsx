import classes from './Footer.module.css';

const Footer = () => {
   return (
      <div className={`${classes.footer} ${'flex-col-center'}`}>
         <p>
            Desenvolvido por{' '}
            <a
               href='https://github.com/philipeoliveira'
               title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
               target='_blank'
            >
               Philipe Oliveira
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
            </a>
         </p>
      </div>
   );
};

export default Footer;
