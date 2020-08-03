import React, { FC } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Teacher from '../../components/Teacher';

import { Form, InputWrapper, Main } from './styles';

const TeacherList: FC = () => {
  return (
    <Container page="teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <InputWrapper>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </InputWrapper>
        </Form>
      </PageHeader>

      <Main>
        <Teacher />
        <Teacher />
        <Teacher />
      </Main>
    </Container>
  );
};

export default TeacherList;
