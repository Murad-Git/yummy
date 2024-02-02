import ReactDOM from 'react-dom';

interface Props {
  onConfirm: (prev: any) => void;
  className?: string;
}

export const Backdrop = ({ onConfirm, className }: Props) => {
  return (
    <div
      className={`fixed top-0 left-0 z-40 h-screen w-full bg-[rgba(0,0,0,0.1)] ${className}`}
      onClick={() => onConfirm((prev: boolean) => !prev)}
    />
  );
};
export const Overlay = ({ onConfirm, className }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} className={className} />,
        document.getElementById(`overlays`) as Element,
      )}
    </>
  );
};
