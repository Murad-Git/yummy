'use client';
// import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  className: React.ComponentProps<'form'>['className'];
  subClassName: React.ComponentProps<'div'>['className'];
}

export const SearchField = ({ className, subClassName }: Props) => {
  const { push } = useRouter();
  const [placeholder, setPlaceholder] = useState(`Search...`);

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case `query`:
        setPlaceholder(`Search...`);
        break;
      case `ingredients`:
        setPlaceholder(`apples, flour, sugar`);
        break;
      default:
        setPlaceholder(`Search...`);
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { search: searchTerm } = e.currentTarget;
    const { searchSelect: type } = e.currentTarget;

    if (type.value === 'query')
      push(`/search?term=${searchTerm.value}&type=${type.value}`);
    if (type.value === 'ingredients')
      push(`/search/ingredients?term=${searchTerm.value}&type=${type.value}`);
  };
  return (
    <form className={`${className} `} onSubmit={handleSubmit}>
      <div className={`mx-auto ${subClassName} text-gray-600`}>
        <div className='relative mb-3 md:mb-auto'>
          <div className='relative inline-block'>
            <input
              className='h-10 rounded-lg border-2 border-gray-300 bg-gray-100 px-3 md:px-5 md:pr-10 text-sm focus-within:outline-none focus:border-green-400 focus:outline-none focus-visible:outline-none'
              type='search'
              name='search'
              placeholder={placeholder}
            />
            <button type='submit' className='absolute right-0 mt-[0.8rem] mr-4'>
              <svg
                className='h-4 w-4 fill-current text-gray-600'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                version='1.1'
                id='Capa_1'
                x='0px'
                y='0px'
                viewBox='0 0 56.966 56.966'
                xmlSpace='preserve'
                width='512px'
                height='512px'
              >
                <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <label htmlFor='searchSelect' />
          <select
            className='h-10 rounded-lg border-2 border-gray-300 bg-gray-100 px-3 md:px-5 pt-2 text-sm focus-within:outline-none focus:border-mainColor focus:outline-none focus-visible:outline-none'
            id='searchSelect'
            name='searchSelect'
            onChange={handleOptionChange}
          >
            <option value='query'>Recipe</option>
            <option value='ingredients'>Ingredients</option>
          </select>
        </div>
      </div>
    </form>
  );
};
