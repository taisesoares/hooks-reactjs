import React, { useRef, useEffect } from 'react';

export const AutosizeTextarea = () => {
  const textareaRefElement = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRefElement.current) {
      textareaRefElement.current.style.height = 'auto';
      textareaRefElement.current.style.height = `${textareaRefElement.current.scrollHeight}px`;
    }
  }, []);

  const handleChange = () => {
    if (textareaRefElement.current) {
      textareaRefElement.current.style.height = 'auto';
      textareaRefElement.current.style.height = `${textareaRefElement.current.scrollHeight}px`;
    }
  };

  return <textarea ref={textareaRefElement} onChange={handleChange} />;
};
