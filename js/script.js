const charactersUrl = "https://rickandmortyapi.com/api/character/";

const baseUrl = "https://cors-anywhere.herokuapp.com/" + charactersUrl;

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        rickAndMorty(json);
    })
    .catch(function() {
        document.location.href = "error.html";
    });


function rickAndMorty(json) {

    const results = json.results;
    console.dir(results);
    
    const loader = document.querySelector(".loader");
    loader.style.display = "none";

    const resultsContainer = document.querySelector(".results");
    let html = "";

    results.forEach(function(result) {
    
        let unknownType = "Unknown"; 

        if(result.type) {
            unknownType = result.type;
        }
        html += `<div class="col-sm-6 col-md-4 col-lg-3">                
                    <div class="card">
                        <img class="image" src="${result.image}" alt="${result.name}">
                        <div class="details">
                            <h4 class="name">${result.name}</h4>
                            <p>Type: ${unknownType}</p>    
                            <p>Episode count: ${result.episode.length}</p>                                       
                            <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
                        </div>
                    </div>
                </div>`
        
    });

resultsContainer.innerHTML = html;

}

