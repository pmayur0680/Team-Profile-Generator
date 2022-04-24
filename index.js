// Include packages needed for this application
const inquirer = require('inquirer'); // interactive command line user interfaces
const fs = require('fs'); // Node standard library package for reading and writing files
// Include all required clases
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// include template file
const pageTemplate = require('./src/page-template');
const { listenerCount } = require('process');
const filePath = './dist/index.html'; // path to writing file
const teamMembers = []; // Dynamically add instance of each team member
// Create an array of questions for manager
const managerQuestions = [
    {
        // name
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',        
        validate: name => {
            if(!name) {
                return "Please enter manager's name";            
            }                
            return true;
        }
    },
    {
        // id
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s id?',
        validate: id => {
            if(!id || isNaN(id)){                
                return "Please enter valid input";
            }            
            return true;
        }
    },
    {
        // email
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email?',
        validate: email => {
            let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!pattern.test(email)){                
                return "Please enter valid input";
            }            
            return true;
        }
    },   
    {
        // Office Number
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team manager\'s office number?',
        validate: officeNumber => {
            if(!officeNumber || isNaN(officeNumber)){                
                return "Please enter valid input";
            }            
            return true;
        }
    },            
  ] 
  // Create an array of questions for engineer
const enginnerQuestions = [
    {
        // name
        type: 'input',
        name: 'name',
        message: 'What is your engineer\'s name?',        
        validate: name => {
            if(!name) {
                return "Please enter engineer's name";            
            }                
            return true;
        }
    },
    {
        // id
        type: 'input',
        name: 'id',
        message: 'What is your engineer\'s id?',
        validate: id => {
            if(!id || isNaN(id)){                
                return "Please enter valid input";
            }            
            return true;
        }
    },
    {
        // email
        type: 'input',
        name: 'email',
        message: 'What is your engineer\'s email?',
        validate: email => {
            let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!pattern.test(email)){                
                return "Please enter valid input";
            }            
            return true;
        }
    },   
    {
        // Github username
        type: 'input',
        name: 'githubUsername',
        message: 'What is your engineer\'s github username?',
        validate: githubUsername => {
            if(!githubUsername) {
                return "Please enter engineer's github username";            
            }                
            return true;
        }
    },            
  ] 
// Create an array of questions for intern
const internQuestions = [
    {
        // name
        type: 'input',
        name: 'name',
        message: 'What is your intern\'s name?',        
        validate: name => {
            if(!name) {
                return "Please enter intern's name";            
            }                
            return true;
        }
    },
    {
        // id
        type: 'input',
        name: 'id',
        message: 'What is your intern\'s id?',
        validate: id => {
            if(!id || isNaN(id)){                
                return "Please enter valid input";
            }            
            return true;
        }
    },
    {
        // email
        type: 'input',
        name: 'email',
        message: 'What is your intern\'s email?',
        validate: email => {
            let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!pattern.test(email)){                
                return "Please enter valid input";
            }            
            return true;
        }
    },   
    {
        // school
        type: 'input',
        name: 'school',
        message: 'What is your intern\'s school?',
        validate: school => {
            if(!school) {
                return "Please enter intern's school";            
            }                
            return true;
        }
    },            
  ]   
// Create an array of questions for choices
const menuChoices = [
    {
        type: 'list',
        name: 'userChoice',
        message: "What would you like to next? Choose from the option below:",
        choices: [
            "Add an engineer",
            "Add an intern",
            "I'm done, build my team page"
        ]
    }
]

// create function for choices
const addTeamMember = () => {
    inquirer.prompt(menuChoices)
    .then((answers) => {
        // fetch from response
        if(answers.userChoice == "Add an engineer")
        addEngineer();
        else if(answers.userChoice == "Add an intern")    
        addIntern();
        else if(answers.userChoice == "I'm done, build my team page")      
        writeFile();
    })  
}  
// Create function to prompt user for add engineer
const addEngineer = () => {
    inquirer.prompt(enginnerQuestions)
    .then((answers) => {
        // fetch from response
        const { name, id, email, githubUsername } = answers;
        // create instance of Enginner
        const engineer = new Engineer(name, id, email, githubUsername);
        teamMembers.push(engineer);        
    })  
    .then(addTeamMember)  // back to menu
}  
// Create function to prompt user for add intern
const addIntern = () => {
    inquirer.prompt(internQuestions)
    .then((answers) => {
        // fetch from response
        const { name, id, email, school } = answers;
        // create instance of Intern
        const intern = new Intern(name, id, email, school);
        teamMembers.push(intern);        
    })  
    .then(addTeamMember)  // back to menu
}  
// write
const writeFile = () => {
    fs.writeFile(filePath, pageTemplate.generateTeamPage(teamMembers), (err) =>
    err ? console.error(err) : 
    console.log('Your team page has been successfully created! Please check out index.html')
    );
}
// Create a function to initialize app
function init() {
    // prompt manager questions
        // store response in array for later user
        // show menu with the option to add an engineer or an intern or to finish building my team                
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        // fetch from response
        const { name, id, email, officeNumber } = answers;
        // create instance of Manager
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager);        
    })  
    .then(addTeamMember)  
    .catch((err) => console.error(err));
}    
// Function call to initialize app
init();
