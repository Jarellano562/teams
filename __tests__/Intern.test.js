const Intern = require("../lib/Intern");

test("Set School via the constructor argument", () => {
    const testValue = "University";
    const emp = new Intern("J", 1, "test@fakemail.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Intern";
    const emp = new Intern("Jesus", 1, "test@fakemail.com", "University");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
    const testValue = "University";
    const emp = new Intern("J", 1, "test@fakemail.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});