import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const TeacherScrollList = styled(ScrollView)`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
`;

export const Input = styled.TextInput`
  background-color: #fff;
  height: 54px;
  border-radius: 8px;
  padding: 0 16px;
  justify-content: center;
  margin: 4px 0 16px;
`;

export const SubmitButton = styled(Button)`
  height: 56px;
  padding: 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`;
