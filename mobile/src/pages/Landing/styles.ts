import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
  padding: 40px;
`;

export const Image = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'Poppins_400Regular';
  font-size: 20px;
  line-height: 30px;
  margin-top: 60px;
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 40px;
`;

export const ButtonStudy = styled(Button)`
  background-color: #9871f5;
`;

export const ButtonTeach = styled(Button)``;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
