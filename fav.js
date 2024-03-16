// let data=localStorage.getItem("superheroData");

// const favVal=document.getElementById('favResults');
// window.onload=function(){
//     console.log(data);
//     data.forEach((element) => {
//         const desc=`<div>${element.name} </div>`
//         favVal.innerHTML=desc;
        
//     }); 
// }
// const favVal = document.getElementById('favResults');
// window.onload = function() {
//     let data = localStorage.getItem("superheroData");
//     if (data) {
//         data = JSON.parse(data);
//         console.log(data);
//         // Create HTML for a single superhero
//         const desc = `<div>${data.name}</div>`;
//         favVal.innerHTML = desc; // Replace innerHTML instead of appending
//     }
// };
// const favVal = document.getElementById('favResults');
// window.onload = function() {
//     let data = localStorage.getItem("superheroData");
//     console.log("Stored superhero data:", data); // Log the stored data
//     if (data) {
//         data = JSON.parse(data);
//         console.log("Parsed superhero data:", data); // Log the parsed data
//         // Check if 'name' property exists in the parsed data
//         if (data.name) {
//             const desc = `<div>${data.name}</div>`;
//             favVal.innerHTML = desc;
//         } else {
//             console.error("Superhero name not found in the data:", data);
//         }
//     } else {
//         console.error("Superhero data not found in localStorage");
//     }
// };

const favVal = document.getElementById('favResults');

// window.onload = function() {
//     let data = localStorage.getItem("superheroData");
//     console.log("Stored superhero data:", data); // Log the stored data
//     if (data) {
//         data = JSON.parse(data);
//         console.log("Parsed superhero data:", data); // Log the parsed data
//         // Check if 'name' property exists in the parsed data
//         if (data.length > 0 && data[0].name) {
//             const desc = `<div>${data[0].name}</div>`;
//             const img = document.createElement('img');
//             img.src = data[0].thumbnail;
//             img.alt ="Superhero Thumbnail";
//            // const Rimg = `<div>${data.thumbnail.path}.${superhero.thumbnail.extension}</div>`;
//             favVal.innerHTML = desc;
//             //favVal.innerHTML = Rimg;
//             const container = document.createElement('div');
// container.appendChild(desc);
// container.appendChild(img);

// // Append the container to the desired element in your HTML
// document.getElementById('favResults').appendChild(container);




//         } else {
//             console.error("Superhero name not found in the data:", data);
//         }
//     } else {
//         console.error("Superhero data not found in localStorage");
//     }
// };

// Assuming you have retrieved the data and parsed it into the 'data' variable

window.onload = function() {
    let data = localStorage.getItem("superheroData");
    console.log("Stored superhero data:", data); // Log the stored data
    if (data) {
        data = JSON.parse(data);
        console.log("Parsed superhero data:", data); // Log the parsed data
        if (data[0]) { // Assuming data is an array and you want the first item
            const container = document.getElementById('favResults');
            
            // Create a div for the superhero name
            const nameDiv = document.createElement('h4');
            nameDiv.textContent = data[0].name;
            
            // Create an img element for the thumbnail
            const img = document.createElement('img');
           // img.src = data[0].thumbnail;
          // img.src = data[0].thumbnail.path + "." + data[0].thumbnail.extension+ "?quality=80";
          img.src = data[0].thumbnail.path + "." + data[0].thumbnail.extension + "?quality=10";


            img.alt = "Superhero Thumbnail";

            // Append the name and thumbnail to the container
            container.appendChild(nameDiv);
            container.appendChild(img);
        } else {
            console.error("No superhero data found in the array:", data);
        }
    } else {
        console.error("Superhero data not found in localStorage");
    }
};




