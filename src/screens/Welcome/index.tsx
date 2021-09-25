import React from 'react';
import { Image, Text } from 'react-native';

import Fi from '@expo/vector-icons/Feather'

import BackgroundImg from '../../../assets/background.png';
import TaskTitle from '../../../assets/taskTitle.png';
import { Container, Headding, Button } from './styles';

export function  Welcome()  {
  return (
    <Container>
      <Image source={BackgroundImg} />
      <Image source={TaskTitle} />

      <Headding>
      Esse app te ajudara em tarefas do dia a dia{"\n"}
      onde você não faria por falta de organização,{"\n"}
      por isso foi feito esse APP.
      </Headding>

      <Button>
        <Fi name='arrow-right' color='#fff' />
      </Button>

    </Container>
  )
}
