const begin = document.getElementById('init');
const beginGame = () => {
    begin.classList.add('hide');
    renderUserSetup()
}
const renderUserSetup = () => {
    let name = document.createElement('h3');
    name.innerHTML = 'Name';
    let userNameInput = document.createElement('input');
    let jobList = document.createElement('select');
    let jobChoices = ['wizard', 'rogue', 'warrior'];
    document.body.append(name, userNameInput, jobList);
    jobChoices.forEach(function(job){
        let choice = document.createElement('option');
        choice.setAttribute('value', job)
        choice.innerHTML = `${job}`;
        jobList.append(choice);
    })
}

begin.addEventListener('click', beginGame)
