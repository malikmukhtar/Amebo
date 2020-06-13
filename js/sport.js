fetch("json/sport.json")
  .then((res) => res.json())
  .then((data) => {
    let output = "<div></div>";
    data.forEach(function (news) {
      output += `      
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Sport</strong>
          <h3 class="mb-0">${news.title}</h3>
          <div class="mb-1 text-muted">${news.publishedAt}</div>
          <p class="card-text mb-auto">${news.description} <strong>${news.author}</strong></p>
          <a href="${news.url}" class="stretched-link" target='_blank'>Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
            <img src="${news.urlToImage}" alt="" style="width: 200px; height: 250px;">
        </div>
        
      </div>
    </div>      
            `;
    });

    document.getElementById("output").innerHTML = output;
  });
