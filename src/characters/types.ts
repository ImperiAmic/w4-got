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
