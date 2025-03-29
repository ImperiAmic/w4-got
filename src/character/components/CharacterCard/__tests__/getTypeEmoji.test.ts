import { wax } from "../../../../fighter/fixtures";
import getTypeEmoji from "../getTypeEmoji";

describe("Given the getTypeEmoji function", () => {
  describe("When it receives Waxillium Ladrian", () => {
    test("Then it should return 🗡", () => {
      const expectedEmoji = "🗡";

      const actualEmoji = getTypeEmoji(wax);

      expect(actualEmoji).toBe(expectedEmoji);
    });
  });
});
