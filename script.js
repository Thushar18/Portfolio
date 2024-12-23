document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Close dropdown menu after a click on a menu item
document.querySelectorAll('#nav-links a').forEach(item => {
    item.addEventListener('click', function () {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.remove('active'); // Hide mobile nav
    });
});

        // Initialize EmailJS with your public key
    // Initialize EmailJS with your public key
 
    // Initialize EmailJS with your public key
    (function() {
        emailjs.init("4Z8rqyZ9Yo5LbPt89"); // Replace with your EmailJS public key
    })();

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById('user_name').value.trim();
        const email = document.getElementById('user_email').value.trim();
        const message = document.getElementById('user_message').value.trim();

        // Simple form validation
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Debug the template params to check the data
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Send email using EmailJS
        emailjs.send("service_b8b12y4", "template_xlwy6vn", templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response);
                alert("Message Sent Successfully!"); // Show success alert
                document.getElementById('contact-form').reset(); // Reset the form after success
            }, function(error) {
                console.log('FAILED...', error);
                alert("Message Failed! Please try again later."); // Show failure alert
            });
    });