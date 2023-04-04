'use client';
import { Controls, Player } from '@lottiefiles/react-lottie-player';

export default function Loading() {
  return (
    <Player
      autoplay
      loop
      style={{
        height: `600px`,
        width: `600px`,
      }}
      src='https://assets3.lottiefiles.com/packages/lf20_dlihd9az.json'
    >
      <Controls />
    </Player>
    // <div className='animate-pulse p-10 text-center text-lg text-gray-400'>
    //   Loading Recipes
    // </div>
  );
}
