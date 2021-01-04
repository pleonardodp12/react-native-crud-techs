import React, { useState } from 'react';
import {
  Container,
  Form,
  Input,
  List,
  Name,
  ProfileButton,
  SubmitButton,
  Tech,
} from './styles';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState([]);

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar tecnologia"
          value={newTech}
          onChangeText={setNewTech}
          returnType="send"
          onSubmitEditing={() => {}}
        />
      </Form>
    </Container>
  );
}
