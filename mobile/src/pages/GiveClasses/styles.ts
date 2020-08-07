import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;

  background-color: #8257e5;
  padding: 40px;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;
export const Description = styled.Text`
  font-family: 'Archivo_400Regular';
  margin-top: 24px;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  max-width: 240px;
`;

export const OkButton = styled(Button)`
  height: 58px;
  width: 100%;
  padding: 0;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  color: #fff;
`;
