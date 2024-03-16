
  

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const resultsDiv = document.getElementById('results');
  const favArray=[];

  searchBtn.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      searchSuperhero(searchTerm);
    }
  });

  async function searchSuperhero(name) {
      const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&limit=10&apikey=9ab871748d83ae2eb5527ffd69e034de&hash=d35377547e551cd64a60657d2517bb7f?ts=1`;
      console.log(apiUrl);
      try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
          displayResults(data.data.results);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

//   function displayResults(data) {
//     resultsDiv.innerHTML = '';

//     if (data.length === 0) {
//       resultsDiv.innerHTML = '<p>No superhero found with that name.</p>';
//       return;
//     }

//     data.forEach(superhero => {
//       const superheroDiv = document.createElement('div');
//       superheroDiv.classList.add('superhero');

//       const img = document.createElement('img');
//       img.src = `${superhero.thumbnail.path}.${superhero.thumbnail.extension}`;
//       img.alt = superhero.name;

//       const name = document.createElement('h5');
//       name.textContent = superhero.name;

//       const desc = document.createElement('p');
//       desc.textContent = superhero.description;

//       const addButton = document.createElement('button');
//       addButton.textContent = 'Add favouratie';
//       addButton.addEventListener('click', function() {
//         localStorage.setItem('superheroDescription', `${superhero.thumbnail.path}.${superhero.thumbnail.extension}`);

//         window.location.href = 'fav.html';

//         superheroDiv.appendChild(desc); // Append the description when the button is clicked
//         addButton.style.display = 'none'; // Hide the button after showing the description
//       });


//       superheroDiv.appendChild(img);
//       superheroDiv.appendChild(name);
//       superheroDiv.appendChild(addButton);

//       //superheroDiv.appendChild(desc);

//       resultsDiv.appendChild(superheroDiv);
//     });
//   }
// });

function displayResults(data) {
  resultsDiv.innerHTML = '';

  if (data.length === 0) {
    resultsDiv.innerHTML = '<p>No superhero found with that name.</p>';
    return;
  }

  data.forEach(superhero => {
    const superheroDiv = document.createElement('div');
    superheroDiv.classList.add('superhero');

    const img = document.createElement('img');
    img.src = `${superhero.thumbnail.path}.${superhero.thumbnail.extension}`;
    img.alt = superhero.name;

    const name = document.createElement('h5');
    name.textContent = superhero.name;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add favourite';
    addButton.id=superhero.id;
    addButton.className="faouraite_btn";
    addButton.addEventListener('click', function () {
      var val= superhero.id;
      favArray.push(superhero);
      console.log(favArray);
      
      // Store superhero data in local storage
      localStorage.setItem('superheroData', JSON.stringify(favArray));

      // Navigate to 'fav.html'
     // window.location.href = 'fav.html';
    });

    document.addEventListener("DOMContentLoaded", function() {
      const resultsDiv = document.getElementById("results");
    
      // Add event listener to the results div
      resultsDiv.addEventListener("click", function(event) {
        // Check if the clicked element is a button with the class "add-favorite"
        if (event.target.classList.contains("Add favourite")) {
          // Handle the click event here
          // For example, you can access the superhero data associated with the clicked button
          const superheroData = JSON.parse(event.target.dataset.superhero);
          // You can now perform any action with the superhero data, such as adding it to favorites
          console.log("Adding superhero to favorites:", superheroData);
        }
      });
    });
    







    superheroDiv.appendChild(img);
    superheroDiv.appendChild(name);
    superheroDiv.appendChild(addButton);

    resultsDiv.appendChild(superheroDiv);
  }); // <-- Close the forEach loop here
}
});

