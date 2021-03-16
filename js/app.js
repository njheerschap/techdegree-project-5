baguetteBox.run('.gallery');

let images = document.getElementsByTagName('a');
const input = document.getElementById('searchBar');

input.addEventListener('keyup', search => {
    let searchString = search.target.value.toLowerCase();
    for( i = 0; i < images.length; i++) {
        let inputVal = images[i].getAttribute('data-caption');
        if (inputVal.toLocaleLowerCase().indexOf(searchString) > -1) {
            images[i].style.display = "";
        } else {
            images[i].style.display = "none";
        }
        }
    });

