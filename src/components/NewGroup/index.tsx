import React from "react";

import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highligt } from "@components/Highligt";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highligt
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}