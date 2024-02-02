'use client';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

export const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <>
      <a
        href='#nav'
        className={`bg-green-600 rounded-full px-3 py-2  fixed bottom-8 right-8 hover:animate-bounce transition-all duration-500 scroll-smooth ${
          visible ? 'opacity-50 md:hover:opacity-100' : 'opacity-0'
        }`}
      >
        <FontAwesomeIcon
          className='font-bold text-2xl text-white'
          icon={faChevronUp}
        />
      </a>
    </>
  );
};
