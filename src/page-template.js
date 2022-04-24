// Header of html file up to jumbotron

const generateHTML = (teamMemberCards) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
      <script src="https://kit.fontawesome.com/d87c68d163.js" crossorigin="anonymous"></script>
      <title>My Team</title>
    </head>
    <body>
      <div class="container">
        <div class="jumbotron bg-danger">
          <h1 class="text-center text-white">My Team</h1>
        </div>
        <div class="d-flex flex-wrap justify-content-around">
        ${teamMemberCards}
        </div>
    </div>
    </body>
    </html>`;
}

const generateTeamPage = (teamMembers) => {
    let cards = '';
    for (let index = 0; index < teamMembers.length; index++) {
        const teamMember = teamMembers[index];
        if(teamMember.getRole() == "Manager")
        cards+=generateManagerCard(teamMember);        
        else if(teamMember.getRole() == "Engineer")
        cards+=generateEngineerCard(teamMember);        
        else if(teamMember.getRole() == "Intern")
        cards+=generateInternCard(teamMember);                                
    }    
    return generateHTML(cards);        
}
// generate manager card based on user input
const generateManagerCard = (manager) => {
    return `<div class="card mb-2" style="width: 18rem;">
    <h2 class="card-title bg-primary text-center text-white">${manager.name}
      <p class="mt-2 h4"><i class="fa-solid fa-mug-hot"></i> Manager</p>
    </h2>      
    <div class="card-body">
      <ul class="list-group">
      <li class="list-group-item">Id: ${manager.id}</li>
      <li class="list-group-item">Email: <a href='mailto:${manager.email}'>${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>  
      </ul>
    </div>
  </div> `;
}
// generate engineer card based on user input
const generateEngineerCard = (engineer) => {
    return `<div class="card mb-2" style="width: 18rem;">
    <h2 class="card-title bg-primary text-center text-white">${engineer.name}
      <p class="mt-2 h4"><i class="fa-solid fa-glasses"></i> Engineer</p>
    </h2>      
    <div class="card-body">
      <ul class="list-group">
      <li class="list-group-item">Id: ${engineer.id}</li>
      <li class="list-group-item">Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></li>
      <li class="list-group-item">
      <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a>
      </li>
      </ul>
    </div>
  </div> `;
}
// generate intern card based on user input
const generateInternCard = (intern) => {
    return `<div class="card mb-2" style="width: 18rem;">
    <h2 class="card-title bg-primary text-center text-white">${intern.name}
      <p class="mt-2 h4"><i class="fa-solid fa-user-graduate"></i> Intern</p>
    </h2>      
    <div class="card-body">
      <ul class="list-group">
      <li class="list-group-item">Id: ${intern.id}</li>
      <li class="list-group-item">Email: <a href='mailto:${intern.email}'>${intern.email}</a></li>
      <li class="list-group-item">${intern.getSchool()}</li>
      </ul>
    </div>
  </div> `;
}
module.exports = {    
    generateTeamPage
};