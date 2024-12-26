// Select all buttons with the "section-toggle" class
const buttons = document.querySelectorAll('.section-toggle');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the target page from the button's data attribute
        const targetPage = button.getAttribute('data-target');
        
        // Open the target page in a new tab or the current tab
        window.location.href = targetPage;
    });
});

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Sign up successful!');
        } else {
            alert('Sign up failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});


