function displayConfirmation() {
    const confirmationMessage = document.querySelector('.confirmation-message');
    confirmationMessage.classList.add('show');
    setTimeout(() => {
        confirmationMessage.classList.remove('show');
    }, 4000); // Display the message for 4 seconds
}

// Attaching a function to the form submission event
const paymentForm = document.getElementById('payment-form');
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes

    // Simulate payment processing delay (2 seconds)
    // In a real scenario, this is where you'd make an API call or process the payment
    setTimeout(() => {
        displayConfirmation(); // Display the confirmation message
        // Here, you can add logic to process the payment (API call, validation, etc.)
    }, 2000);
});

function alert(){
    swal("Good job!", "You clicked the button!", "success");
}