const Manager = require('../lib/Manager');

// test for constructor
describe("connstructor", () => {
    it("should initialize name, id, email, and officenumber", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";
        const officeNumber = '3539';

        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.officeNumber).toEqual(officeNumber);
    });
});
// test for getOfficeNumber
describe("get manager office number", () => {
    it("should return manager office number", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";
        const officeNumber = '3539';

        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.getOfficeNumber()).toEqual(officeNumber);        
    });
});

// test for getRole
describe("get manager role", () => {
    it("should return 'Manager'", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";
        const officeNumber = '3539';

        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.getRole()).toBe('Manager');        
    });
});