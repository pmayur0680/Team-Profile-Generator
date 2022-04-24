// Header of html file up to jumbotron
const generateHeader = () => {
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
        <div class="d-flex flex-wrap justify-content-around">`;
}
// footer of file
const generateFooter = () => {
    return `</div>
    </div>
    </body>
    </html>`;    
}
// generate manager card based on user input
const generateManagerCard = ({ name, id, email, officeNumber, role }) => {
    return `<div class="card mb-2" style="width: 18rem;">
    <h2 class="card-title bg-primary text-center text-white">${name}
      <p class="mt-2 h4"><i class="fa-solid fa-mug-hot"></i> ${role}</p>
    </h2>      
    <div class="card-body">
      <ul class="list-group">
      <li class="list-group-item">Id: ${id}</li>
      <li class="list-group-item">Email: <a href='mailto:${email}'>${email}</a></li>
      <li class="list-group-item">Office Number: ${officeNumber}</li>  
      </ul>
    </div>
  </div> `;
}
// generate engineer card based on user input
const generateEngineerCard = ({ name, id, email, gitUsername, role }) => {
    return `<div class="card mb-2" style="width: 18rem;">
    <h2 class="card-title bg-primary text-center text-white">${name}
      <p class="mt-2 h4"><i class="fa-solid fa-glasses"></i> ${role}</p>
    </h2>      
    <div class="card-body">
      <ul class="list-group">
      <li class="list-group-item">Id: ${id}</li>
      <li class="list-group-item">Email: <a href='mailto:${email}'>${email}</a></li>
      <li class="list-group-item"><a href='https://github.com/${gitUsername}'>${gitUsername}</a></li>
      </ul>
    </div>
  </div> `;
}
// generate intern card based on user input
const generateInternCard = ({ name, id, email, school, role }) => {
    return `<div class="card mb-2" style="width: 18rem;">
    <h2 class="card-title bg-primary text-center text-white">${name}
      <p class="mt-2 h4"><i class="fa-solid fa-mug-hot"></i> ${role}</p>
    </h2>      
    <div class="card-body">
      <ul class="list-group">
      <li class="list-group-item">Id: ${id}</li>
      <li class="list-group-item">Email: <a href='mailto:${email}'>${email}</a></li>
      <li class="list-group-item">${school}</li>
      </ul>
    </div>
  </div> `;
}
module.exports = {
    generateHeader,
    generateFooter,
    generateManagerCard,
    generateEngineerCard,
    generateInternCard
};