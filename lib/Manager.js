const Employee = require('./Employee');

// extend Employee class from Employee.js
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);      
        this.officeNumber = officeNumber;  
    }
    // overridden to return Manager
    getRole() {
        
    }
}

// const teamManager = new Manager('Mayur', 101, 'pmayur19@yahoo.com', 'O101');
// teamManager.getRole();