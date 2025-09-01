const refreshButton = document.getElementById("refresh-btn");
const refreshLabel = document.getElementById("refresh-btn-label");
const dogGrid = document.getElementById("dog-grid");
const maxItems = 8;
const loadingSpinner = document.getElementById("loading-spinner");

loadingSpinner.style.visibility = "hidden";
loadingSpinner.style.position = "absolute";

function fetchDogs() {
    /* Change from the initial state */
	loadingSpinner.style.visibility = "visible";
	loadingSpinner.style.position = "unset";

	refreshLabel.innerText = "Fetching new dogs...";
	dogGrid.style.opacity = 0.5; // Fade the cards

	const dogCardArray = [];

	const requests = [];

	for (let i = 0; i < maxItems; i++) {
		const request = fetch("https://dog.ceo/api/breeds/image/random").then(
			(response) => response.json(),
		);
		requests.push(request);
	}

	Promise.all(requests)
		.then((results) => {
			results.forEach((data) => {
                console.log(data)

				const dogCard = document.createElement("div");
				dogCard.className = "dog-card";

				const dogImage = document.createElement("img");
				dogImage.src = data.message;
				dogImage.alt = "Dog Image";

				const dogName = document.createElement("h3");
				dogName.innerText = getBreed(data.message);

                // Check when the dogImage for each card is loaded
				dogImage.onload = () => {
					dogCard.appendChild(dogImage);
					dogCard.appendChild(dogName);

					dogCardArray.push(dogCard);

                    /* Check if the dogArray has reached the maximum amount of items prior to displaying them */
					if (dogCardArray.length === maxItems) {

                        /* Clear the grid as the items are ready to be rerendered. */
						dogGrid.innerHTML = "";

						dogCardArray.forEach((card) => {
							refreshLabel.innerText = "Fetch new dogs";
							dogGrid.appendChild(card);
						});
                        
                        /* Hide spinner once everything is populated */
						loadingSpinner.style.visibility = "hidden";
						loadingSpinner.style.position = "absolute";
						dogGrid.style.opacity = 1;
					}
				};
			});
		})
		.catch((error) => console.error("Error:", error));
}

function getBreed(url) {
	const parts = url.split("/");
	const breed = parts[parts.indexOf("breeds") + 1];

	return breed
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

refreshButton.addEventListener("click", fetchDogs);