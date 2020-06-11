let url =
  "https://api.currentsapi.services/v1/search?" +
  "keywords=latest&language=en&" +
  "apiKey=azpezpTrodizvpuEZ3f0LUeBOdFl2UJT9KuK6hEfOrob6Q6Q";
let req = new Request(url);
fetch(req)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let output = "<div></div>";
    data.news.forEach(function (news) {
      output += `
      
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">${news.title}</h3>
          <div class="mb-1 text-muted">${news.published}</div>
          <p class="card-text mb-auto">${news.description} <strong>${news.author}</strong></p>
          <a href="${news.url}" class="stretched-link" target='_blank'>Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
            <img src="${news.image}" alt="" style="width: 200px; height: 250px;">
        </div>
        
      </div>
    </div>    
  
            `;
    });

    document.getElementById("output").innerHTML = output;
  });
