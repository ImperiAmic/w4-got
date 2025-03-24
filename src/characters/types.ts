export type Character = {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  portraitUrl: string;
  portraitDescription: string;
};

export type King = Character & {
  yearsOfReign: number;
  phrase: "You are all going to die";
};

export type Adviser = Character & {
  advisesTo: string;
  phrase: "I don't know why, but I think I'm going to die soon";
};

export type Fighter = Character & {
  weapon: string;
  dexterity: number;
  phrase: "First I punch, then I ask";
};
