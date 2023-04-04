import * as React from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export default function Container({ children, className }: Props) {
  // Put Header or Footer Here
  return <div className={`container ${className}`}>{children}</div>;
}
