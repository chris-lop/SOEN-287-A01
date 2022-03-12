function submitIndex() {
    const profStatement = document.getElementById('profStatement');
    const bio = document.getElementById('bio');

    let data =
        'Professional Statement: ' + profStatement.value + '\r\n'+
        'Brief Biography: ' + bio.value;
    
    const blob = new Blob([data], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.download = "indexData.txt";
    a.href = window.URL.createObjectURL(blob);
    a.target = "blank";
    a.style.display = "none"
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // document.querySelector('form').reset();
}

function submitProjects() {
    const projects = document.getElementById('projects');

    data = 'My Projects: ' + projects.value;
    
    const blob = new Blob([data], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.download = "projectsData.txt";
    a.href = window.URL.createObjectURL(blob);
    a.target = "blank";
    a.style.display = "none"
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function submitResume() {
    const eduQual = document.getElementById('eduQual');
    const skills = document.getElementById('skills');
    const awards = document.getElementById('awards');
    const experience = document.getElementById('experience');
    const referees = document.getElementById('referees');

    let data =
        'Educational Qualifications: ' + eduQual.value + '\r\n'+
        'Skill Set: ' + skills.value + '\r\n'+
        'Awards/Recognition: ' + awards.value + '\r\n'+
        'Work Experience: ' + experience.value + '\r\n'+
        'Referees: ' + referees.value;

    const blob = new Blob([data], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.download = "resumeData.txt";
    a.href = window.URL.createObjectURL(blob);
    a.target = "blank";
    a.style.display = "none"
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function readMessages() {
    var uploadFile = document.getElementById("uploadFile").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        var temp = document.getElementById("displayWin");
        temp.value = fileLoadedEvent.target.result;
    };
    fileReader.readAsText(uploadFile, "UTF-8");
};

function submitSocial() {
    const social1 = document.getElementById('social1');
    const social2 = document.getElementById('social2');
    const social3 = document.getElementById('social3');

    let data =
        'Social Link 1: ' + social1.value + '\r\n'+
        'Social Link 2: ' + social2.value + '\r\n'+
        'Social Link 3: ' + social3.value;
    
    const blob = new Blob([data], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.download = "socialData.txt";
    a.href = window.URL.createObjectURL(blob);
    a.target = "blank";
    a.style.display = "none"
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function processLogout() {
    sessionStorage.clear(); 
}