interface Props {
  className?: string;
  onClick?: (param: string) => void;
  bType: 'btn-filled' | 'btn-outline' | 'btn-green-outline';
  children: React.ReactNode;
  type: 'button' | 'reset' | 'submit';
}

export const Button = ({
  className,
  onClick,
  bType,
  children,
  type,
}: Props) => {
  return (
    <button
      className={`btn ${bType} ${!!className && className}`}
      type={type}
      onClick={onClick ? () => onClick(`signIn`) : undefined}
    >
      {children}
    </button>
  );
};
