import React, { useEffect, useState } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', logMousePosition);
    return () => {
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []); //run useEffect Only Once

  return (
    <div>
      Hooks - {x} X and {y} Y{' '}
    </div>
  );
}

export default HookMouse;
