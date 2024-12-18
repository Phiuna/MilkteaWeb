script.js
//Index HTML
// Responsive Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.createElement("button");
    navToggle.textContent = "☰";
    navToggle.style.backgroundColor = "#f5deb3";
    navToggle.style.border = "none";
    navToggle.style.fontSize = "1.5rem";
    navToggle.style.cursor = "pointer";
    navToggle.style.display = "none";

    const nav = document.querySelector("nav ul");
    document.querySelector("header").prepend(navToggle);

    const toggleMenu = () => {
        nav.classList.toggle("visible");
        nav.style.display = nav.classList.contains("visible") ? "block" : "none";
    };

    navToggle.addEventListener("click", toggleMenu);

    // Handle responsiveness
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            nav.style.display = "none";
            navToggle.style.display = "block";
        } else {
            nav.style.display = "flex";
            navToggle.style.display = "none";
        }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
});

// Smooth Scrolling for Anchor Links
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
};
smoothScroll();

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll(".fade-in, .slide-up");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        observer.observe(el);
    });
};
animateOnScroll();

// Form Validation
const formValidation = () => {
    const form = document.querySelector("#fill-up-form form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');
        let isValid = true;

        if (!name.value.trim()) {
            isValid = false;
            alert("Name is required");
        }
        if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
            isValid = false;
            alert("A valid email is required");
        }
        if (!message.value.trim()) {
            isValid = false;
            alert("Message cannot be empty");
        }

        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
};
formValidation();


//About Us HTML
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Anchor Links
    const smoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    };
    smoothScroll();

    // Responsive Navbar Toggle
    const navToggle = document.createElement("button");
    navToggle.textContent = "☰";
    navToggle.style.backgroundColor = "#f5deb3";
    navToggle.style.border = "none";
    navToggle.style.fontSize = "1.5rem";
    navToggle.style.cursor = "pointer";
    navToggle.style.display = "none";

    const nav = document.querySelector("nav ul");
    document.querySelector("header").prepend(navToggle);

    const toggleMenu = () => {
        nav.classList.toggle("visible");
        nav.style.display = nav.classList.contains("visible") ? "block" : "none";
    };

    navToggle.addEventListener("click", toggleMenu);

    // Handle responsiveness
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            nav.style.display = "none";
            navToggle.style.display = "block";
        } else {
            nav.style.display = "flex";
            navToggle.style.display = "none";
        }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Scroll Animation for About Section
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(".about-content, .about-image");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            observer.observe(el);
        });
    };
    animateOnScroll();

    // Interactive Footer Button (simulating an action)
    const orderNowBtn = document.querySelector(".order-now-btn");
    if (orderNowBtn) {
        orderNowBtn.addEventListener("click", () => {
            alert("You have clicked 'Order Now'. Redirecting to the menu...");
            window.location.href = "menu.html"; // Redirect to the menu page (you can change this link)
        });
    }
});


//Menu HTML
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Anchor Links
    const smoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    };
    smoothScroll();

    // Responsive Navbar Toggle
    const navToggle = document.createElement("button");
    navToggle.textContent = "☰";
    navToggle.style.backgroundColor = "#f5deb3";
    navToggle.style.border = "none";
    navToggle.style.fontSize = "1.5rem";
    navToggle.style.cursor = "pointer";
    navToggle.style.display = "none";

    const nav = document.querySelector("nav ul");
    document.querySelector("header").prepend(navToggle);

    const toggleMenu = () => {
        nav.classList.toggle("visible");
        nav.style.display = nav.classList.contains("visible") ? "block" : "none";
    };

    navToggle.addEventListener("click", toggleMenu);

    // Handle responsiveness
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            nav.style.display = "none";
            navToggle.style.display = "block";
        } else {
            nav.style.display = "flex";
            navToggle.style.display = "none";
        }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Interactive Footer Button (simulating an action)
    const orderNowBtn = document.querySelector(".order-now-btn");
    if (orderNowBtn) {
        orderNowBtn.addEventListener("click", () => {
            alert("You have clicked 'Order Now'. Redirecting to the menu...");
            window.location.href = "menu.html"; // Redirect to the menu page (you can change this link)
        });
    }

    // Add to Cart Simulation
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to Cart";
        item.appendChild(addToCartBtn);

        addToCartBtn.addEventListener("click", () => {
            const productName = item.querySelector("h3").textContent;
            const productPrice = item.querySelector("p").textContent;
            alert(`${productName} has been added to your cart! Price: ${productPrice}`);
            // Here, you can add the logic to actually add the product to a cart in the future
        });
    });
});

//Contact HTML
// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation Function
function validateForm(event) {
    let formValid = true;

    // Check Full Name
    const fullName = document.getElementById('full-name').value;
    if (fullName === '') {
        formValid = false;
        alert('Full name is required.');
    }

    // Check Phone Number
    const phone = document.getElementById('phone').value;
    if (phone === '') {
        formValid = false;
        alert('Phone number is required.');
    }

    // Check Email
    const email = document.getElementById('email').value;
    if (email === '') {
        formValid = false;
        alert('Email is required.');
    }

    // Check Address
    const address = document.getElementById('address').value;
    if (address === '') {
        formValid = false;
        alert('Street address is required.');
    }

    // Check City
    const city = document.getElementById('city').value;
    if (city === '') {
        formValid = false;
        alert('City is required.');
    }

    // Check Zip Code
    const zipCode = document.getElementById('zip-code').value;
    if (zipCode === '') {
        formValid = false;
        alert('Zip code is required.');
    }

    // Check Message
    const message = document.getElementById('message').value;
    if (message === '') {
        formValid = false;
        alert('Message is required.');
    }

    // If the form is not valid, prevent submission
    if (!formValid) {
        event.preventDefault();
    }
}

// Add event listener to the form
document.querySelector('form').addEventListener('submit', validateForm);

// Fade-in effect when the page is loaded
window.addEventListener('load', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.classList.add('visible');
    });
});