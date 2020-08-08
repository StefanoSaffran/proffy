import styled, { css } from 'styled-components/native';
import Button from '../Button';

interface IFavoriteButtonProps {
  isFavorite: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const Name = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.colorTextTitle};
  font-size: 20px;
`;
export const Subject = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${({ theme }) => theme.colors.colorTextBase};
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  margin: 0 24px;
  color: ${({ theme }) => theme.colors.colorTextBase};
`;

export const Footer = styled.View`
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${({ theme }) => theme.colors.colorTextBase};
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(Button)<IFavoriteButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  ${props =>
    props.isFavorite &&
    css`
      background-color: #e33d3d;
    `}
`;

export const ContactButton = styled(Button)`
  flex: 1;
  flex-direction: row;
  height: 56px;
  padding: 0;
  align-items: center;
  justify-content: center;
`;

export const ContactButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonColor};
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`;
