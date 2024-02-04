'use client';
import { Controls, Player } from '@lottiefiles/react-lottie-player';

export default function Loading() {
  return (
    <Player
      autoplay
      loop
      className='h-[400px] w-[400px] md:h-[600px] md:w-[600px]'
      // style={{
      //   height: `600px`,
      //   width: `600px`,
      // }}
      src='https://assets3.lottiefiles.com/packages/lf20_dlihd9az.json'
    >
      <Controls />
    </Player>
  );
}
