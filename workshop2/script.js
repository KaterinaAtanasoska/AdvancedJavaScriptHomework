const input = document.getElementById("search");
const buttonSearch = document.getElementById("buttonSearch");
const table = document.getElementById("table");
const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");
const loader = document.getElementById("loader");
const nameTH = document.getElementById("name-th");

let link = "https://restcountries.eu/rest/v2/name/";
let data = [];
let sorting = false;

loader.style.display="none";

buttonSearch.addEventListener("click", loadData)

function loadData() {
    loader.style.display="block";
    async function contryData() {
        let response = await fetch(`${link}${input.value}`);
        data = await response.json();
        console.log(data);
        contryInfo(data);
        }
        contryData();
    } 


    function contryInfo(dataOfContry) {
        loader.style.display="none";
        tbody.innerHTML = "";
        dataOfContry.forEach(contry => {
            tbody.innerHTML += `
              <tr>
                 <th scope="row"><img src="${contry.flag}" class="flags"></th>
                 <td>${contry.name}</td>
                 <td>${contry.population}</td>
                 <td>${contry.capital}</td>
                 <td>${contry.area}</td>
                 <td>${contry.currencies[0].name}</td>
                 <td>${contry.languages[0].name}</td>
             </tr>
       `
        })
     };



        nameTH.addEventListener("click", function(){
            sorting = !sorting;
            sorting ? descending() : ascending();
        });
        
        function descending() {
            let sortDescending = data.sort((user1, user2) => user2.name.localeCompare(user1.name)); 
            contryInfo(sortDescending);
        }
        
        function ascending() {
            let sortAscending = data.sort((user1, user2) => user1.name.localeCompare(user2.name));
            contryInfo(sortAscending);
        };