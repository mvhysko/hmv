import * as sinon from "sinon";
import User from "../src/user";

describe("User Tests", () => {
  test("User: update status", async () => {
    const user = new User("Max");

    const mockUser = sinon.mock(user);
    mockUser.expects("updateStatus").withArgs("old").twice();

    user.updateStatus("old");
    user.updateStatus("old");

    mockUser.verify();
  });
});
