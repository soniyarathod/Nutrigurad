// Navbar Toggle for Mobile View
document.getElementById('menu-icon').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

// Submit Diet Form
function submitForm() {
    // Capture form data
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const activityLevel = document.getElementById("activityLevel").value;
    const goal = document.getElementById("goal").value;

    if (age && weight && height && activityLevel && goal) {
        const recommendation = `
            <h2>Your Personalized Diet Recommendation</h2>
            <p>Based on your inputs:</p>
            <ul>
                <li><strong>Age:</strong> ${age}</li>
                <li><strong>Weight:</strong> ${weight} kg</li>
                <li><strong>Height:</strong> ${height} cm</li>
                <li><strong>Activity Level:</strong> ${activityLevel}</li>
                <li><strong>Goal:</strong> ${goal}</li>
            </ul>
            <p>We recommend consulting a nutritionist for detailed planning.</p>
        `;
        document.getElementById("recommendation").innerHTML = recommendation;
    } else {
        alert("Please fill in all fields before getting a recommendation!");
    }
}


// Submit Question Form
function submitQuestion() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const question = document.getElementById("question").value;

    if (name && email && question) {
        alert(`Thank you, ${name}! Your question has been submitted.`);
        document.getElementById("questionForm").reset();
    } else {
        alert("Please fill all fields before submitting your question!");
    }
}

// Submit Contact Form
function submitContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill all fields before sending your message!");
    }
}

// Services Section: Smooth Scroll to Section
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
