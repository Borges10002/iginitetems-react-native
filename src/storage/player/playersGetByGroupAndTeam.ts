import { playersGetByGroup } from "./playerGetByGroups";

export async function playerGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playersGetByGroup(group);

    const player = storage.filter((player) => player.team === team);

    return player;
  } catch (error) {
    throw error;
  }
}
