import React from 'react';

function MoveControls({ onMove, selectedChar }) {
  if (!selectedChar) return null;

  const charType = selectedChar.split('-')[1];

  return (
    <div className="move-controls">
      {charType.includes('P') && (
        <>
          <button onClick={() => onMove('L')}>Left</button>
          <button onClick={() => onMove('R')}>Right</button>
          <button onClick={() => onMove('F')}>Forward</button>
          <button onClick={() => onMove('B')}>Backward</button>
        </>
      )}
      {charType === 'H1' && (
        <>
          <button onClick={() => onMove('L')}>Left</button>
          <button onClick={() => onMove('R')}>Right</button>
          <button onClick={() => onMove('F')}>Forward</button>
          <button onClick={() => onMove('B')}>Backward</button>
        </>
      )}
      {charType === 'H2' && (
        <>
          <button onClick={() => onMove('FL')}>Forward-Left</button>
          <button onClick={() => onMove('FR')}>Forward-Right</button>
          <button onClick={() => onMove('BL')}>Backward-Left</button>
          <button onClick={() => onMove('BR')}>Backward-Right</button>
        </>
      )}
    </div>
  );
}

export default MoveControls;
