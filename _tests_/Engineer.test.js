const Engineer = require('../lib/Engineer');

// test for constructor
describe("connstructor", () => {
    it("should initialize name, id, email, and github", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";
        const github = 'jose123';

        const engineer = new Engineer(name, id, email, github);
        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.github).toEqual(github);
    });
});
// test for getGithub
describe("get engineer github username", () => {
    it("should return engineer github username", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";
        const github = 'jose123';

        const engineer = new Engineer(name, id, email, github);
        expect(engineer.getGithub()).toEqual(github);        
    });
});

// test for getRole
describe("get engineer role", () => {
    it("should return 'Engineer'", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";
        const github = 'jose123';

        const engineer = new Engineer(name, id, email, github);
        expect(engineer.getRole()).toBe('Engineer');        
    });
});