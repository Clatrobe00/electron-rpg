const begin = document.getElementById('init');
const beginGame = () => {
    begin.classList.add('hide');
    renderUserSetup()
}
const fs = require('fs');
const renderUserSetup = () => {
    let name = document.createElement('h3');
    name.innerHTML = 'Name';
    let userNameInput = document.createElement('input');
    let jobList = document.createElement('select');
    let jobChoices = ['wizard', 'rogue', 'warrior'];
    let userSubmitBtn = document.createElement('button');
    userSubmitBtn.innerHTML = "Ready!";
    userSubmitBtn.setAttribute('id', 'ready');
    document.body.append(name, userNameInput, jobList, userSubmitBtn);
    jobChoices.forEach(function(job){
        let choice = document.createElement('option');
        choice.setAttribute('value', job)
        choice.innerHTML = `${job}`;
        jobList.append(choice);
    })


}

const writeInfo = () => {
    fs.writeFile('playerProfile.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

const ready = document.getElementById('ready');

begin.addEventListener('click', beginGame);
ready.addEventListener('click', writeInfo);
