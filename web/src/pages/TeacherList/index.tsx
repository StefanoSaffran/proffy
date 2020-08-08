import React, { FC, useRef, useCallback, useState } from 'react';

import { FormHandles } from '@unform/core';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Teacher from '../../components/Teacher';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import { UnForm, Main } from './styles';

interface ITeacherData {
  subject: string;
  week_day: string;
  time: string;
}

interface IUser {
  id: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

export interface IInfosClasses {
  id: string;
  user: IUser;
  subject: string;
  cost: string;
}

const TeacherList: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [teachers, setTeachers] = useState<IInfosClasses[]>([]);

  const handleSubmit = useCallback(async (data: ITeacherData) => {
    const { subject, week_day, time } = data;
    const response = await api.get<IInfosClasses[]>('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeachers(response.data);
  }, []);

  return (
    <Container page="teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ci' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input name="time" type="time" label="Hora" />

          <button type="submit">Buscar</button>
        </UnForm>
      </PageHeader>

      <Main>
        {teachers.map(teacher => (
          <Teacher key={teacher.id} teacher={teacher} />
        ))}
      </Main>
    </Container>
  );
};

export default TeacherList;
