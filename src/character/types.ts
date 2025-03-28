export type Character = {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  portraitUrl: string;
  portraitDescription: string;
  die: () => void;
  speak: () => string;
};

export type CharacterData = Pick<
  Character,
  "name" | "lastName" | "age" | "portraitUrl" | "portraitDescription"
>;
