import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

export const Container = styled.View`
  padding: 35px 30px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(BorderlessButton)``;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin: 40px 0;
`;

export const HeaderTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ToggleThemeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 25px;
`;

export const ThemeIcon = styled(Icon).attrs({
  size: 30,
  color: '#feb72b',
})``;
