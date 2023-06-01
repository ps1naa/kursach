fetch('Date.xml')
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
    const tours = xmlDOM.getElementsByTagName('tour');
    // Отображение туров на странице
    const toursContainer = document.getElementById('tours');
    for (let i = 0; i < tours.length; i++) {
      const tour = tours[i];
      const image = tour.getElementsByTagName('img')[0].childNodes[0].nodeValue;
      const age = tour.getElementsByTagName('age')[0].childNodes[0].nodeValue;
      const name = tour.getElementsByTagName('name')[0].childNodes[0].nodeValue;
      const author = tour.getElementsByTagName('author')[0].childNodes[0].nodeValue;
      const button = tour.getElementsByTagName('button')[0].childNodes[0].nodeValue;
      const tourElement = document.createElement('div');
      tourElement.className = 'containers';
      tourElement.innerHTML = `
      <div class="item">
      <img src="./${image}" alt="${name}" class='bookImg'>
      <div class="description">
      <p class="filmAge">${age}</p>
      <h2 class="filmName">${name}</h2>
      <p class="Аuthor">${author}</p>
      </div>
      <div class="buyBotton"><a href="">${button}</span></button>
      </a></div>
  </div>
      `;

      
      toursContainer.appendChild(tourElement);
    }
  })
  .catch(error => console.error(error));
