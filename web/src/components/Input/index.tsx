import React, { FC, InputHTMLAttributes, useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: FC<IInputProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} ref={inputRef} defaultValue={defaultValue} />
    </Container>
  );
};

export default Input;
