import ReactDOM from 'react-dom';

interface Props {
  onConfirm: () => void;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const Backdrop = ({ onConfirm, className, children }: Props) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-30 h-screen w-full bg-[rgba(0,0,0,0.1)] ${className}`}
        onClick={() => onConfirm()}
      />
      {children}
    </>
  );
};
export const Overlay = ({ onConfirm, className, children }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          children={children}
          onConfirm={onConfirm}
          className={className}
        />,
        document.getElementById(`overlays`) as Element,
      )}
    </>
  );
};
