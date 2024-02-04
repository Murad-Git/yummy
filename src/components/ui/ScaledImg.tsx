import Image from 'next/image';
import React from 'react';
import { Overlay } from '~/components/ui/Overlay';
import { animated, useTransition, config } from '@react-spring/web';
import { useAppDispatch, useAppSelector } from '~/types/main';
import { setImgScaled } from '~/store/navigationSlice';

interface Props {
  onClick: () => void;
  src: string;
}

export const ScaledImg = ({ src }: Props) => {
  const scaleImg = useAppSelector((state) => state.isImgScaled);
  const dispatch = useAppDispatch();
  const transitions = useTransition(scaleImg, {
    from: {
      opacity: 0,
    },
    enter: { opacity: 1, transform: `scale(${1})` },
    leave: { opacity: 0, transform: `scale(${0.9})` },
    config: config.wobbly,
  });
  return (
    <Overlay
      onConfirm={() => dispatch(setImgScaled())}
      className={`${scaleImg ? 'block' : 'hidden'}`}
    >
      <animated.div className={`${transitions}`}>
        {/* <animated.div
        className={`fixed z-40 translate-x-[30rem] translate-y-[-10rem] ${transitions}`}
      > */}
        <Image
          className={`${
            scaleImg ? 'scale-[1.1] md:scale-150 xl:scale-[2]' : 'scale-0'
          } absolute right-0 left-0 mx-auto transition-all duration-300 delay-500 rounded z-40 top-1/3`}
          src={src}
          alt='recipe'
          height={500}
          width={500}
        />
      </animated.div>
    </Overlay>
  );
};
