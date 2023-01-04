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
      </div>
   );
};

export default Footer;
