import { Character } from "../../types";

const getTypeEmoji = (character: Character): string => {
  let typeEmoji: string;

  switch (character.speak()) {
    case "You are all going to die":
      typeEmoji = "👑";
      break;

    case "First I punch, then I ask":
      typeEmoji = "🗡";
      break;

    case "I don't know why, but I think I'm going to die soon":
      typeEmoji = "🎓";
      break;

    case "I am a looser":
      typeEmoji = "🛡️";
      break;

    default:
      typeEmoji = "";
      break;
  }

  return typeEmoji;
};

export default getTypeEmoji;
