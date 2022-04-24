const Employee = require('../lib/Employee');

// test for constructor
describe("connstructor", () => {
    it("should initialize name, id, and email", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";

        const employee = new Employee(name, id, email);
        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
    });
});

// test for getName
describe("get employee name", () => {
    it("should return employee name", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";

        const employee = new Employee(name, id, email);
        expect(employee.getName()).toEqual(name);        
    });
});

// test for getId
describe("get employee id", () => {
    it("should return employee id", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";

        const employee = new Employee(name, id, email);
        expect(employee.getId()).toEqual(id);        
    });
});

// test for getEmail
describe("get employee email", () => {
    it("should return employee email", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";

        const employee = new Employee(name, id, email);
        expect(employee.getEmail()).toEqual(email);        
    });
});

// test for getRole
describe("get employee role", () => {
    it("should return 'Employee'", () => {
        const name = "Jose";
        const id = 101;
        const email = "jose@fakeemail.com";

        const employee = new Employee(name, id, email);
        expect(employee.getRole()).toBe('Employee');        
    });
});