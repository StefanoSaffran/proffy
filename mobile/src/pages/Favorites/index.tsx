import React from 'react';
import PageHeader from '../../components/PageHeader';

import { Container } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />
    </Container>
  );
};

export default Favorites;
