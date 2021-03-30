const buttons = document.querySelectorAll('.buttonFilter');
const images = document.querySelectorAll('.imageFilter');
const textSearch = document.getElementById('searchText');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let animal = this.getAttribute('animal');
        // console.log(animal)
        typedValue = textSearch.value;
        for (let i = 0; i < images.length; i++) {
            if(animal === 'all') {
                images[i].style.display = 'block';
            } else {
                let imageAltText = images[i].getAttribute('alt');

                if (images[i].classList.contains(animal)) {
                    if(typedValue !== '') {
                        if(imageAltText != null && imageAltText.includes(typedValue)) {
                            images[i].style.display = 'inline-block';
                        } else {
                            images[i].style.display = 'none';
                        }
                    } else {
                        images[i].style.display = 'inline-block';
                    }
                } else {
                    images[i].style.display = 'none';
                }
            }
        }
    })
}

// Tasks todo:
// Add some helper text above the images that says something like “showing animals that match the search “{searchString}” and the filter {filter}.
// Include typed string logic in the first scenario (“Show all” clicked) to filter out images according to their alt text.
// Add CSS classes that show which filter is currently selected by adding a border to the clickable element.