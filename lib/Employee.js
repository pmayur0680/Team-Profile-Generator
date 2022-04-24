class Employee {
    // Set employee name, id, and email when instance created
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // return employee name
    getName() {
        return this.name;
    }
    // return employee id
    getId() {
        return this.id;
    }
    // return employee email
    getEmail() {
        return this.email;        
    }
    // return employee
    getRole() {

    }
}

module.exports = Employee;