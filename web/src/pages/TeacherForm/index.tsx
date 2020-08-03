import React, { FC } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';

const TeacherForm: FC = () => {
  return (
    <Container page="form">
      <PageHeader title="Que incrível que você quer dar aulas." />
    </Container>
  );
};

export default TeacherForm;
