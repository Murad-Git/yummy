import { ChangeEvent, useState } from 'react';

interface Props {
  onZoomChange: (level: { level: string }) => void;
  onMoveBtns: (move: { move: string }) => void;
  // onPrevious: () => void;
  // onNext: () => void;
}

export default function MoveBtns({ onZoomChange, onMoveBtns }: Props) {
  const [level, setLevel] = useState('');
  const [move, setMove] = useState('');

  const handleZoom = (ev: ChangeEvent<HTMLInputElement>) => {
    const newLevel = ev.target.value;
    setLevel(newLevel);
    if (onZoomChange) {
      onZoomChange({ level: newLevel });
      // onZoomChange({ level: newLevel });
    }
  };
  const handleMove = (ev: React.MouseEvent) => {
    const newMove = (ev.target as HTMLButtonElement).value;
    setMove(newMove);
    if (onMoveBtns) {
      onMoveBtns({ move: newMove });
    }
  };

  return (
    <div>
      <div className='space-x-2'>
        <button
          className='btn btn-blue'
          id='previous'
          value='previous'
          onClick={handleMove}
        >
          Previous
        </button>

        <button
          className='btn btn-blue'
          value='next'
          id='next'
          onClick={handleMove}
        >
          Next
        </button>
        <button
          className='btn btn-blue'
          value='today'
          id='today'
          onClick={handleMove}
        >
          Today
        </button>
      </div>
      <div>
        <span className='toolbar-item'>
          Zoom:
          <label>
            <input
              type='radio'
              name='zoom'
              value='month'
              onChange={handleZoom}
              checked={level === 'month'}
            />{' '}
            Month
          </label>
          <label>
            <input
              type='radio'
              name='zoom'
              value='week'
              onChange={handleZoom}
              checked={level === 'week'}
            />{' '}
            Week
          </label>
        </span>
      </div>
    </div>
  );
}
