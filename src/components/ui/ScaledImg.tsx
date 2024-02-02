import Image from 'next/image';
import React from 'react';
import { Overlay } from '~/components/ui/Overlay';
import { animated, useTransition, config } from '@react-spring/web';

interface Props {
  onClick: (prev: any) => void;
  src: string;
  scaleImg: boolean;
}

export const ScaledImg = ({ onClick, src, scaleImg }: Props) => {
  const transitions = useTransition(scaleImg, {
    from: {
      opacity: 0,
    },
    enter: { opacity: 1, transform: `scale(${1})` },
    leave: { opacity: 0, transform: `scale(${0.9})` },
    config: config.wobbly,
  });
  return (
    <>
      <Overlay
        onConfirm={onClick}
        className={`${scaleImg ? 'block' : 'hidden'}`}
      />

      <animated.div
        className={`fixed z-40 translate-x-[30rem] translate-y-[-10rem] ${transitions}`}
      >
        <Image
          className={`${
            scaleImg ? 'scale-[2]' : 'scale-0'
          } transition-all duration-300 delay-500 rounded`}
          src={src}
          alt='recipe'
          height={500}
          width={500}
        />
      </animated.div>
    </>
  );
};
