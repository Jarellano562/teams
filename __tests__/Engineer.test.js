const Engineer = require("../lib/Engineer");

test("Set GitHub Account via constructor argument", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("J", 1, "test@fakemail.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Engineer";
    const emp = new Engineer("J", 1, "test@fakemail.com", "GitHubUser");
    expect(emp.getRole()).toBe(testValue);
});

test("Get GitHub UN via getGitHub()", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("J", 1, "test@fakemail.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});