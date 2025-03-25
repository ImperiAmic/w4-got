export type Character = {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  portraitUrl: string;
  portraitDescription: string;
  die: unknown;
};

export type Portrait = {
  url: string;
  description: string;
};
