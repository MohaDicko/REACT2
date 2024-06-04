import { Players } from "../players";
import Player from "./Player";

function PlayersList() {
  return Players.map((player, index) => <Player key={index} {...player} />);
}

export default PlayersList;
