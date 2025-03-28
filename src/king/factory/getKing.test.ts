import getKing from "./getKing";

describe("Given the getKing function", () => {
  describe("When it receives Felipe IV and 19 years of reign", () => {
    const yearsOfReign = 19;

    test("Then it should return a king with 19 years of reign", () => {
      const expectedYearsOfReign = 19;

      const king = getKing(
        {
          name: "Felipe",
          lastName: "IV",
          age: 60,
          portraitUrl: "",
          portraitDescription: "",
        },
        yearsOfReign,
      );
      const actualYearsOfReign = king.yearsOfReign;

      expect(actualYearsOfReign).toBe(expectedYearsOfReign);
    });

    test("Then it should return a king that says 'You are all going to die'", () => {
      const expectedPhrase = "You are all going to die";

      const king = getKing(
        {
          name: "Felipe",
          lastName: "IV",
          age: 60,
          portraitUrl: "",
          portraitDescription: "",
        },
        yearsOfReign,
      );
      const actualPhrase = king.speak();

      expect(actualPhrase).toBe(expectedPhrase);
    });
  });
});
