import React, { useState, useCallback } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import { useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Teacher from '../../components/Teacher';

import * as S from './styles';

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

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<IInfosClasses[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekday] = useState('');
  const [time, setTime] = useState('');

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('proffy:favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: IInfosClasses) => teacher.user.id,
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [loadFavorites]),
  );

  const handleToggleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(state => !state);
  }, []);

  const handleFilterSubmit = useCallback(async () => {
    loadFavorites();

    const { data } = await api.get<IInfosClasses[]>('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(data);
    setIsFiltersVisible(false);
  }, [subject, week_day, time, loadFavorites]);

  return (
    <S.Container>
      <PageHeader
        title="Proffys disponíveis"
        // eslint-disable-next-line prettier/prettier
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
          // eslint-disable-next-line prettier/prettier
        )}
      >
        {isFiltersVisible && (
          <S.SearchForm>
            <S.Label>Matéria</S.Label>
            <S.Input
              value={subject}
              onChangeText={setSubject}
              placeholder="Qual a matéria"
              placeholderTextColor="#c1bccc"
            />

            <S.InputGroup>
              <S.InputBlock>
                <S.Label>Dia da semana</S.Label>
                <S.Input
                  value={week_day}
                  onChangeText={setWeekday}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </S.InputBlock>

              <S.InputBlock>
                <S.Label>Horário</S.Label>
                <S.Input
                  value={time}
                  onChangeText={setTime}
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                />
              </S.InputBlock>
            </S.InputGroup>

            <S.SubmitButton onPress={handleFilterSubmit}>
              <S.SubmitButtonText>Filtar</S.SubmitButtonText>
            </S.SubmitButton>
          </S.SearchForm>
        )}
      </PageHeader>

      <S.TeacherScrollList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map(teacher => (
          <Teacher
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.user.id)}
          />
        ))}
      </S.TeacherScrollList>
    </S.Container>
  );
};

export default TeacherList;
