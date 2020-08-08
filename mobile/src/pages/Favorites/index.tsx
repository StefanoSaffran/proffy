import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import Teacher from '../../components/Teacher';
import { IInfosClasses } from '../TeacherList';

import { Container, TeacherScrollList } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<IInfosClasses[]>([]);

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('proffy:favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [loadFavorites]),
  );

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <TeacherScrollList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map(teacher => (
          <Teacher key={teacher.id} teacher={teacher} favorited />
        ))}
      </TeacherScrollList>
    </Container>
  );
};

export default Favorites;
