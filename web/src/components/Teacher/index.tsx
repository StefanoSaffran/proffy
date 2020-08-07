import React, { FC, useCallback } from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';
import { IInfosClasses } from '../../pages/TeacherList';

import { Container } from './styles';
import api from '../../services/api';

interface IProps {
  teacher: IInfosClasses;
}

const Teacher: FC<IProps> = ({ teacher }) => {
  const handleCreateNewConnection = useCallback(() => {
    api.post('connections', {
      user_id: teacher.user.id,
    });
  }, [teacher.user]);

  return (
    <Container>
      <header>
        <img src={teacher.user.avatar} alt={teacher.user.name} />

        <div>
          <strong>{teacher.user.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.user.bio}</p>

      <footer>
        <p>
          Preço:
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          onClick={handleCreateNewConnection}
          href={`https://wa.me/${teacher.user.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </Container>
  );
};

export default Teacher;
