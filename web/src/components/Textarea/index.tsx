import React, { FC, TextareaHTMLAttributes, useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: FC<ITextareaProps> = ({ label, name, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        ref={textareaRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};

export default Textarea;
