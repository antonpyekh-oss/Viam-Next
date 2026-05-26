const teamPhotos = [
  "team1.jpg",
  "team2.jpg",
  "team3.jpg"
];

let teamIndex = 0;

function showTeam(){
  const el = document.getElementById("teamPhoto");
  if (el) el.src = teamPhotos[teamIndex];
}

function nextTeam(){
  teamIndex++;
  if(teamIndex >= teamPhotos.length){
    teamIndex = 0;
  }
  showTeam();
}

function prevTeam(){
  teamIndex--;
  if(teamIndex < 0){
    teamIndex = teamPhotos.length - 1;
  }
  showTeam();
}

setInterval(nextTeam, 5000)

const servicePhotos = [
  "service1.jpg",
  "service2.jpg",
  "service3.jpg"
];

let serviceIndex = 0;

function showService(){
  const el = document.getElementById("servicePhoto");
  if (el) el.src = servicePhotos[serviceIndex];
}

function nextService(){
  serviceIndex++;
  if(serviceIndex >= servicePhotos.length){
    serviceIndex = 0;
  }
  showService();
}

function prevService(){
  serviceIndex--;
  if(serviceIndex < 0){
    serviceIndex = servicePhotos.length - 1;
  }
  showService();
}

setInterval(nextService, 5000)

const oPhotos = [
  "office1.jpg",
  "office2.jpg",
  "office3.jpg"
];

let officeIndex = 0;

function showOffice(){
  const el = document.getElementById("officePhoto");
  if (el) el.src = oPhotos[officeIndex];
}

function nextOffice(){
  officeIndex++;
  if(officeIndex >= oPhotos.length){
    officeIndex = 0;
  }
  showOffice();
}

function prevOffice(){
  officeIndex--;
  if(officeIndex < 0){
    officeIndex = oPhotos.length - 1;
  }
  showOffice();
}

setInterval(nextOffice, 5000)
