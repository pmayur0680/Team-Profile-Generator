const { ModernFakeTimers } = require('@jest/fake-timers');
const Employee = require('./Employee');

// extend Employee class from Employee.js
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);        
        this.school = school;
    }
    // overridden to return Intern
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;