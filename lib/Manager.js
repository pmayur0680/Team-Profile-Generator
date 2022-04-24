const { ModernFakeTimers } = require('@jest/fake-timers');
const Employee = require('./Employee');

// extend Employee class from Employee.js
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);      
        this.officeNumber = officeNumber;  
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    // overridden to return Manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;