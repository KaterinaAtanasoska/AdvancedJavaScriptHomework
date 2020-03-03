const buttonContainer = document.getElementById("buttonContainer");
const loader = document.getElementById("loader");
const pageDisplay = document.getElementById("pagedItems");
//people  dom
const cosmonaut = document.getElementById("cosmonaut");
const tbody1 = document.getElementById("tbody1");
const table1 = document.getElementById("table1");
const pervious = document.getElementById("pervious");
const next = document.getElementById("next");
const searchPeopleInput = document.getElementById("searchPeople");
const sort = document.getElementById("sort");
//ships dom
const rocket = document.getElementById("rocket");
const tbody2 = document.getElementById("tbody2");
const table2 = document.getElementById("table2");
const next2 = document.getElementById("next2");
const pervious2 = document.getElementById("pervious2");
const searchShipsInput = document.getElementById("searchShips");
const sort2 = document.getElementById("sort2");
//planets dom
const table3 = document.getElementById("table3");
const tbody3 = document.getElementById("tbody3");
const next3 = document.getElementById("next3");
const pervious3 = document.getElementById("pervious3");
const planet = document.getElementById("planet");
const searchPlanetsInput = document.getElementById("searchPlanets");
const sort3 = document.getElementById("sort3");
//data
let data = [];
let  page = 1;
let  page2 = 1;
let page3 = 1;

//display
table1.style.display = "none";
table2.style.display = "none";
table3.style.display = "none";
pervious.style.display = "none";
next.style.display = "none";
pervious2.style.display = "none";
next2.style.display = "none";
pervious3.style.display = "none";
next3.style.display = "none";
loader.style.display ="none";

//links
let peopleLink = "https://swapi.co/api/people/?page=";
let shipsLink = "https://swapi.co/api/starships/?page=";
let planetsLink = "https://swapi.co/api/planets/?page=";
let searchPeopleLink = "https://swapi.co/api/people/?search=";
let searchShipsLink = "https://swapi.co/api/starships/?search=";
let searchPlanetLink = "https://swapi.co/api/planets/?search=";

//people next pervios buttons
next.addEventListener("click", () => {
    page ++;
    link();
});

pervious.addEventListener("click", function(){
    page --;
    link(); 
});

//ships next previous buttons
next2.addEventListener("click", function(){
    page2 ++;
    link2();
});

pervious2.addEventListener("click", function(){
    page2 --;
    link2();
});

//planets next previous buttons
next3.addEventListener("click", function() {
    page3 ++;
    link3();
}); 

pervious3.addEventListener("click", function(){
    page3 --;
    link3();
});


//cosmonaut
cosmonaut.addEventListener("click", link)
function link() {
    loader.style.display="block";
    async function peopleData() {
        let response = await fetch(`${peopleLink}${page}`);
        data = await response.json();
        cosmonautInfo(data.results);
        addPagingButtons();
    }
    peopleData();
    
}

//pagination people
async function peoplePagedData(page) {
    let url = `${peopleLink}${page}`;
    let response = await fetch(url);
    data = await response.json();
    cosmonautInfo(data.results);
}

function addPagingButtons() {
    pageDisplay.innerHTML = ""
    for(let i = 0; i < data.count / 10; i++) {

        pageDisplay.innerHTML += `
            <button class="page-buttons" value="${i + 1}">${i + 1}</button>
        `;    
    }

    let buttons = document.getElementsByClassName(`page-buttons`);
    for( let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", event => {
            peoplePagedData(event.target.value)
            
        })
    }
}

//print people
function cosmonautInfo(arrayOfPeople) {
   tbody1.innerHTML = "";
   table1.style.display = "block";
   table2.style.display = "none";
   table3.style.display = "none";
   pervious.style.display = "block";
   next.style.display = "block";
   pervious2.style.display = "none";
   next2.style.display = "none";
   pervious3.style.display = "none";
   next3.style.display = "none";
   loader.style.display="none";
    for(let i=0; i<arrayOfPeople.length; i++){
        tbody1.innerHTML += `
    <tr>
    <td> ${arrayOfPeople[i].name} </td>
    <td> ${arrayOfPeople[i].height} </td>
    <td> ${arrayOfPeople[i].mass} </td>
    <td> ${arrayOfPeople[i].gender} </td>
    <td> ${arrayOfPeople[i].birth_year} </td>
    <td> ${arrayOfPeople[i].films.length} </td>
    <td> <button id="deletePeople" onclick="deleteRow1(this)" value="Delete" class="button1"> Delete </button> </td>
    </tr>`}
};

//delete people
function deleteRow1(row) {
    let i = row.parentNode.parentNode.rowIndex;
    table1.deleteRow(i);
    data.results.splice(i-1, 1);
}

//sorting people
let sorting = false;

sort.addEventListener("click", function(){
    sorting = !sorting;
    sorting ? descend() : ascend();
});

function descend() {
    let sortDescending = data.results.sort((user1, user2) => user2.name.localeCompare(user1.name)); 
    cosmonautInfo(sortDescending);
}

function ascend() {
    let sortAscending = data.results.sort((user1, user2) => user1.name.localeCompare(user2.name));
    cosmonautInfo(sortAscending);
}

// rockets
rocket.addEventListener("click", link2)
function link2() {
    loader.style.display="block";
    async function shipsData() {
        let response = await fetch(`${shipsLink}${page2}`);
        data = await response.json();
        shipInfo(data.results);
        addPagingButtons2();
    }
    shipsData();
}

//pagination ships
async function shipsPagedData(page) {
    let url = `${shipsLink}${page}`;
    let response = await fetch(url);
    data = await response.json();
    shipInfo(data.results);
    
}

function addPagingButtons2() {
    pageDisplay.innerHTML = ""
    for(let i = 0; i < data.count / 10; i++) {

        pageDisplay.innerHTML += `
            <button class="page-buttons" value="${i + 1}">${i + 1}</button>
        `;    
    }

    let buttons = document.getElementsByClassName(`page-buttons`);
    for( let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", event => {
            shipsPagedData(event.target.value)
            
        })
    }
}

//print ships
function shipInfo(arrayOfShips) {
    table2.style.display = "block";
    table1.style.display = "none";
    table3.style.display = "none";
    pervious2.style.display = "block";
    next2.style.display = "block";
    pervious.style.display = "none";
    next.style.display = "none";
    pervious3.style.display = "none";
    next3.style.display = "none";
    loader.style.display ="none"
    tbody2.innerHTML = "";

    for(let i=0; i<arrayOfShips.length; i++){
        tbody2.innerHTML += `
        <tr>
        <td> ${arrayOfShips[i].name} </td>
        <td> ${arrayOfShips[i].model} </td>
        <td> ${arrayOfShips[i].manufacturer} </td>
        <td> ${arrayOfShips[i].cost_in_credits} </td>
        <td> ${arrayOfShips[i].crew} </td>
        <td> ${arrayOfShips[i].starship_class} </td>
        <td> <button id="deleteShips" onclick="deleteRow2(this)" value="Delete" class="button1"> Delete </button> </td>
        </tr>
        `}
}

//sorting ships
sort2.addEventListener("click", function(){
    sorting = !sorting;
    sorting ? descend2() : ascend2();
});

function descend2() {
    let sortDescending = data.results.sort((user1, user2) => user2.name.localeCompare(user1.name)); 
    shipInfo(sortDescending);
}

function ascend2() {
    let sortAscending = data.results.sort((user1, user2) => user1.name.localeCompare(user2.name));
    shipInfo(sortAscending);
}

//delete ships
function deleteRow2(row) {
    let i = row.parentNode.parentNode.rowIndex;
    table2.deleteRow(i);
    data.results.splice(i-1, 1);
}

//planets 
planet.addEventListener("click", link3)
function link3() {
    loader.style.display="block";
    async function planetsData() {
        let response = await fetch(`${planetsLink}${page3}`);
        data = await response.json();
        planetsInfo(data.results);
        addPagingButtons3();
    }
    planetsData();
}

//pagination planets
async function planetsPagedData(page) {
    let url = `${planetsLink}${page}`;
    let response = await fetch(url);
    data = await response.json();
    planetsInfo(data.results);
    
}

function addPagingButtons3() {
    pageDisplay.innerHTML = ""
    for(let i = 0; i < data.count / 10; i++) {

        pageDisplay.innerHTML += `
            <button class="page-buttons" value="${i + 1}">${i + 1}</button>
        `;    
    }

    let buttons = document.getElementsByClassName(`page-buttons`);
    for( let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", event => {
            planetsPagedData(event.target.value)
            
        })
    }
}

//print planets
function planetsInfo(arrayOfPlanets) {
    table2.style.display = "none";
    table1.style.display = "none";
    table3.style.display = "block";
    pervious2.style.display = "none";
    next2.style.display = "none";
    pervious.style.display = "none";
    next.style.display = "none";
    pervious3.style.display = "block";
    next3.style.display = "block";
    loader.style.display="none";
    tbody3.innerHTML = "";

    for(let i=0; i<arrayOfPlanets.length; i++){
        tbody3.innerHTML += `
        <tr>
        <td> ${arrayOfPlanets[i].name} </td>
        <td> ${arrayOfPlanets[i].rotation_period} </td>
        <td> ${arrayOfPlanets[i].climate} </td>
        <td> ${arrayOfPlanets[i].gravity} </td>
        <td> ${arrayOfPlanets[i].population} </td>
        <td> ${arrayOfPlanets[i].terrain} </td>
        <td> <button id="deletePlanets" onclick="deleteRow3(this)" value="Delete" class="button1"> Delete </button> </td>
        </tr>
        `}
}

//sorting planets
sort3.addEventListener("click", function(){
    sorting = !sorting;
    sorting ? descend3() : ascend3();
});

function descend3() {
    let sortDescending = data.results.sort((user1, user2) => user2.name.localeCompare(user1.name)); 
    planetsInfo(sortDescending);
}

function ascend3() {
    let sortAscending = data.results.sort((user1, user2) => user1.name.localeCompare(user2.name));
    planetsInfo(sortAscending);
}

//delete planets
function deleteRow3(row) {
    let i = row.parentNode.parentNode.rowIndex;
    table3.deleteRow(i);
    data.results.splice(i-1, 1);
}

//Search People
searchPeopleInput.addEventListener("input", () => {
    searchPeople()
})

async function searchPeople() {
    let response = await fetch(`${searchPeopleLink}${searchPeopleInput.value}`);
    searchedPeople = await response.json();
    cosmonautInfo(searchedPeople.results);
}


//Search Ships
searchShipsInput.addEventListener("input", () => {
    searchShips()
})

async function searchShips() {
    let response = await fetch(`${searchShipsLink}${searchShipsInput.value}`);
    searchedShips = await response.json();
    shipInfo(searchedShips.results);
}

//Search Planets
searchPlanetsInput.addEventListener("input", () => {
    searchPlanet()
})

async function searchPlanet() {
    let response = await fetch(`${searchPlanetLink}${searchPlanetsInput.value}`);
    searchedPlanet = await response.json();
    planetsInfo(searchedPlanet.results);
}