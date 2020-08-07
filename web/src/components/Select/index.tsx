import React, { FC, SelectHTMLAttributes, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useField } from '@unform/core';

import { Container } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: FC<ISelectProps> = ({ label, name, options, ...rest }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} ref={selectRef} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {options.map(({ label: opLabel, value }) => (
          <option key={value} value={value}>
            {opLabel}
          </option>
        ))}
      </select>
      <MdKeyboardArrowDown size={28} />
    </Container>
  );
};

export default Select;
