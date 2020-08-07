import React, { FC, useCallback, useState } from 'react';
import { Linking, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { IInfosClasses } from '../../pages/TeacherList';

import * as S from './styles';
import api from '../../services/api';

interface IProps {
  teacher: IInfosClasses;
  favorited: boolean;
}

const Teacher: FC<IProps> = ({ teacher, favorited }) => {
  const [isFavorite, setIsFavorite] = useState(favorited);

  const handleLinkToWhatsapp = useCallback(() => {
    api.post('connections', {
      user_id: teacher.user.id,
    });

    Linking.openURL(`whatsapp://send?phone=${teacher.user.whatsapp}`);
  }, [teacher.user]);

  const handleToggleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('proffy:favorites');

    let favoritesArray = [];

    if (favorites) favoritesArray = JSON.parse(favorites);

    if (isFavorite) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: IInfosClasses) => teacherItem.user.id === teacher.user.id,
      );

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorite(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorite(true);
    }

    await AsyncStorage.setItem(
      'proffy:favorites',
      JSON.stringify(favoritesArray),
    );
  }, [isFavorite, teacher]);

  return (
    <S.Container>
      <S.Profile>
        <S.Avatar source={{ uri: teacher.user.avatar }} />

        <S.ProfileInfo>
          <S.Name>{teacher.user.name}</S.Name>
          <S.Subject>{teacher.subject}</S.Subject>
        </S.ProfileInfo>
      </S.Profile>

      <S.Bio>{teacher.user.bio}</S.Bio>

      <S.Footer>
        <S.Price>
          Preço/hora {'   '}
          <S.PriceValue>R${teacher.cost}</S.PriceValue>
        </S.Price>

        <S.ButtonsContainer>
          <S.FavoriteButton
            onPress={handleToggleFavorite}
            isFavorite={isFavorite}
          >
            {isFavorite ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </S.FavoriteButton>
          <S.ContactButton onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <S.ContactButtonText>Entrar em contato</S.ContactButtonText>
          </S.ContactButton>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Container>
  );
};

export default Teacher;
