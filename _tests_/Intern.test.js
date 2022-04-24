const Intern = require('../lib/Intern');

// test for constructor
describe("connstructor", () => {
    it("should initialize name, id, email, and school", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";
        const school = 'alief';

        const intern = new Intern(name, id, email, school);
        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.school).toEqual(school);
    });
});
// test for getSchool
describe("get intern school name", () => {
    it("should return intern school name", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";
        const school = 'alief';

        const intern = new Intern(name, id, email, school);
        expect(intern.getSchool()).toEqual(school);        
    });
});

// test for getRole
describe("get intern role", () => {
    it("should return 'Intern'", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";
        const school = 'alief';

        const intern = new Intern(name, id, email, school);
        expect(intern.getRole()).toBe('Intern');        
    });
});