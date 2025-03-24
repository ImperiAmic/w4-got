type Character = {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  portraitUrl: string;
  portraitDescription: string;
};

type King = Character & {
  yearsOfReign: number;
  phrase: "You are all going to die";
};

type Adviser = Character & {
  advisesTo: string;
  phrase: "I don't know why, but I think I'm going to die soon";
};

type Fighter = Character & {
  weapon: string;
  dexterity: number;
  phrase: "First I punch, then I ask";
};
