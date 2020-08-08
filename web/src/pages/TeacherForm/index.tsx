import React, { FC, useState, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormHandles, Scope } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/icons/warning.svg';

import { Main, ScheduleItem } from './styles';
import api from '../../services/api';

interface ITeacherFormData {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: Array<{
    week_day: number;
    from: string;
    to: string;
  }>;
}

const TeacherForm: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  const history = useHistory();

  const handleAddNewScheduleItem = useCallback(() => {
    setScheduleItems(oldItems => [
      ...oldItems,
      { week_day: 0, from: '', to: '' },
    ]);
  }, []);

  const handleSubmit = useCallback(
    async (data: ITeacherFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          avatar: Yup.string().required('Avatar é obrigatório'),
          whatsapp: Yup.string().required('Whatsapp é obrigatório'),
          bio: Yup.string().required('Bio é obrigatória'),
          subject: Yup.string().required('Matéria é obrigatória'),
          cost: Yup.number().required('Matéria é obrigatória'),
          schedule: Yup.array()
            .of(
              Yup.object().shape({
                week_day: Yup.number().required('Dia da semana é obrigatório'),
                from: Yup.string().required('Campo obrigatório'),
                to: Yup.string().required('Campo obrigatório'),
              }),
            )
            .required('Horário é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('classes', data);

        toast('Cadastro realizado com sucesso!', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        history.push('/');
      } catch (err) {
        console.log(err);
      }
      console.log(data);
    },
    [history],
  );

  return (
    <Container page="form">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Main>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="name" type="text" label="Nome completo" />

            <Input name="avatar" type="text" label="Avatar" />

            <Input name="whatsapp" type="text" label="WhatsApp" />

            <Textarea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ci' },
                { value: 'Educação física', label: 'Artes' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />

            <Input name="cost" type="text" label="Custo da sua hora por aula" />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={handleAddNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleItem key={index}>
                <Scope path={`schedule[${index}]`}>
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />

                  <Input name="from" type="time" label="Das" />

                  <Input name="to" type="time" label="Até" />
                </Scope>
              </ScheduleItem>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso inportante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </Form>
      </Main>
    </Container>
  );
};

export default TeacherForm;
