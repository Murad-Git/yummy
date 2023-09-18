import ReactDOM from 'react-dom';

interface Props {
  onConfirm: (prev: any) => void;
}

export const Backdrop = ({ onConfirm }: Props) => {
  return (
    <div
      className='fixed top-0 left-0 z-30 h-screen w-full bg-[rgba(0,0,0,0.1)]'
      onClick={() => onConfirm((prev: any) => !prev)}
    />
  );
};
export const Overlay = ({ onConfirm }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById(`overlays`) as Element
      )}
    </>
  );
};
