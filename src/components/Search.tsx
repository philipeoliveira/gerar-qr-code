import { useState, KeyboardEvent } from 'react';

import { QrCode } from 'phosphor-react';

import classes from './Search.module.css';

type SearchProps = {
   loadQrcode: (inputText: string) => Promise<string>;
};

const Search = ({ loadQrcode }: SearchProps) => {
   const [userText, setUserText] = useState('');

   const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
         loadQrcode(userText);
      }
   };

   return (
      <div className={`${classes.search} ${'flex-col-center'}`}>
         <input
            type='text'
            placeholder='Digite um texto ou link'
            onChange={(e) => setUserText(e.target.value)}
            onKeyDown={handleKeyDown}
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
