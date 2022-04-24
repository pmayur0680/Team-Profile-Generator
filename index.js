// Include packages needed for this application
const inquirer = require('inquirer'); // interactive command line user interfaces
const fs = require('fs'); // Node standard library package for reading and writing files
// Include all required clases
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// include template file
const pageTemplate = require('./src/page-template');
const filePath = './dist/index.html'; // path to writing file
// Create an array of questions for manager
const managerquestions = [
    {
        // name
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'managerName',
    },
    {
        // id
        type: 'input',
        message: 'What is the team manager\'s id?',
        name: 'managerId',
    },
    {
        // email
        type: 'input',
        message: 'What is the team manager\'s email?',
        name: 'managerEmail',
    },   
    {
        // Office Number
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'managerOfficeNumber',
    },            
  ]  

// Create a function to initialize app
function init() {
    // prompt manager questions
    // response received ask for team or exit
    // when enginner selected prompt enginner questions
    // response received ask for team or exit
    // when intern selected prompt intern questions
    // response received ask for team or exit >> Repeat
    inquirer.prompt(managerquestions)
    .then((answers) => {
        // fetch from response
        const {managerName, managerId, managerEmail, managerOfficeNumber} = answers;
        // create instance of Manager
        const teamManager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
        // get values from class Manager
        const aboutManager = {
            managerName: teamManager.getName(),
            managerId: teamManager.getId(),
            managerEmail: teamManager.getEmail(),
            managerOfficeNumber: teamManager.getOfficeNumber(),
            managerRole: teamManager.getRole()
        }        
        // Creat new file with html page header using bootstrap
        fs.writeFileSync(filePath, pageTemplate.generateHeader());
        // Append card based on user input
        fs.appendFile(filePath, pageTemplate.generateManagerCard(aboutManager), (err) => {
            if(err) console.log(err)
        });
        // Append html page footer using bootstrap
        fs.appendFile(filePath, pageTemplate.generateFooter(), (err) =>  {
            if(err) console.log(err)
        });
    })
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}    
// Function call to initialize app
init();
