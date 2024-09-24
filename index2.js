// Task 2: Write JavaScript code to handle form submissions and store user input in an object.
// Task 3: Implement form validation to ensure that all required fields are filled before submission.


// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form
form.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the form elements
    const formData = new FormData(form);

    // Create an object to store the form data
    const data = {};

    // Loop through the form elements
    for (let [key, value] of formData.entries()) {
        // Add the form data to the object
        data[key] = value;
    }

    // Log the form data
    console.log(data);
});




