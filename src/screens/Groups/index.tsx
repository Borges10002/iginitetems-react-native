import { useState } from "react";
import { FlatList } from "react-native";
import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";

import { Container } from "./styled";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<String[]>([
    "Galera da rocket",
    "Amigos",
  ]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
