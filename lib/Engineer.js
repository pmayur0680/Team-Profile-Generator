const Employee = require('./Employee');

// extend Employee class from Employee.js
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);        
        this.github = github;
    }
    // overridden to return Engineer
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;