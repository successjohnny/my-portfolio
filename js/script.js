console.log("Portfolio loaded successfully!");


// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const menuIsOpen =
            navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

    });

}


// =========================
// CLOSE MOBILE MENU
// AFTER CLICKING A LINK
// =========================

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.querySelector("#contact-form");

const submitButton =
    document.querySelector("#submit-button");


if (contactForm && submitButton) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            // Save the original button text

            const originalButtonText =
                submitButton.textContent;


            // Prevent multiple submissions

            submitButton.disabled = true;

            submitButton.textContent =
                "Sending...";


            // Collect form data

            const formData =
                new FormData(contactForm);


            try {

                // Send form data to Formspree

                const response = await fetch(
                    contactForm.action,
                    {
                        method: contactForm.method,

                        body: formData,

                        headers: {
                            "Accept": "application/json"
                        }
                    }
                );


                // Check whether Formspree accepted
                // the message

                if (response.ok) {

                    alert(
                        "Thank you! Your message has been sent successfully."
                    );

                    contactForm.reset();

                } else {

                    alert(
                        "Sorry, your message could not be sent. Please try again."
                    );

                }

            } catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );

                alert(
                    "There was a connection problem. Please try again later."
                );

            } finally {

                // Restore button

                submitButton.disabled = false;

                submitButton.textContent =
                    originalButtonText;

            }

        }
    );

}