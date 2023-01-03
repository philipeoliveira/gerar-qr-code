import { useState } from 'react';

import { QrCode } from 'phosphor-react';

import classes from './Search.module.css';

type SearchProps = {
   loadQrcode: (inputText: string) => Promise<string>;
};

const Search = ({ loadQrcode }: SearchProps) => {
   const [userText, setUserText] = useState('');

   return (
      <div className={`${classes.search} ${'flex-col-center'}`}>
         <input
            type='text'
            placeholder='Digite um texto ou link'
            onChange={(e) => setUserText(e.target.value)}
         />
         <button
            className='flex-row-center'
            onClick={() => loadQrcode(userText)}
         >
            <QrCode color={'var(--color-light)'} />
            Gerar
         </button>
      </div>
   );
};

export default Search;
