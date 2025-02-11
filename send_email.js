
        (function() {
            emailjs.init("jB_PCP6pfNV5foHau"); // Replace with your EmailJS User ID
        })();

        function sendEmail() {
            let textContent = document.getElementById("message").value;

            if (!textContent) {
                alert("Please enter a message.");
                return;
            }

            let templateParams = {
                message: textContent,
                to_email: "tomo42806@example.com", // Replace with your email
            };

            emailjs.send("service_a4bum8f", "template_2ukw4uo", templateParams)
                .then(response => {
                    alert("Email sent successfully!");
                }, error => {
                    alert("Failed to send email: " + JSON.stringify(error));
                });
        }