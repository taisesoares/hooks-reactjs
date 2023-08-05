import React, { useRef, useEffect } from 'react';

export const AutoFocusInput = () => {
  const inputRefElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRefElement.current) {
      inputRefElement.current.focus();
    }
  }, []);

  return <input ref={inputRefElement} type="text" />;
};
