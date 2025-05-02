// I used js for the hamburger menu and the contact form

document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu functionality
    const hamburgerBtn = document.querySelector(".hamburger-btn")
    const navLinks = document.querySelector(".nav-links")
  
    // Toggle navigation on hamburger click
    hamburgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show")
    })
  
    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      const isClickInsideNav = navLinks.contains(event.target)
      const isClickOnHamburger = hamburgerBtn.contains(event.target)
  
      if (navLinks.classList.contains("show") && !isClickInsideNav && !isClickOnHamburger) {
        navLinks.classList.remove("show")
      }
    })
  
    // Contact form functionality
    const contactSection = document.querySelector(".contact-section")
    const contactContent = contactSection.querySelector(".contact-content")
  
    // Check if the contact form already exists
    if (!document.getElementById("contactForm")) {
      // Create contact form container if it doesn't exist
      const formContainer = document.createElement("div")
      formContainer.className = "contact-form-container"
  
      // Create form HTML
      formContainer.innerHTML = `
        <form id="contactForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Write a message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Submit</button>
        </form>
      `
  
      // Create left side container
      const leftContainer = document.createElement("div")
      leftContainer.className = "contact-left"
  
      // Move existing content to left container
      const h2 = contactContent.querySelector("h2")
      const p = contactContent.querySelector("p")
      const chatBtn = contactContent.querySelector(".chat-btn")
  
      if (h2) leftContainer.appendChild(h2.cloneNode(true))
      if (p) leftContainer.appendChild(p.cloneNode(true))
      if (chatBtn) leftContainer.appendChild(chatBtn.cloneNode(true))
  
      // Add arrow pointing to form
      const arrow = document.createElement("div")
      arrow.className = "contact-arrow"
      arrow.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" fill="none" stroke="#999999">
          <path d="M0,25 H90 M70,5 L90,25 L70,45" stroke-width="2"/>
        </svg>
      `
      leftContainer.appendChild(arrow)
  
      // Clear existing content and add new structure
      contactContent.innerHTML = ""
      contactContent.appendChild(leftContainer)
      contactContent.appendChild(formContainer)
  
      // Create results container if it doesn't exist
      if (!document.getElementById("formResults")) {
        const resultsContainer = document.createElement("div")
        resultsContainer.id = "formResults"
        resultsContainer.className = "form-results"
        contactSection.querySelector(".container").appendChild(resultsContainer)
      }
    }
  
    // Contact form functionality
    const contactForm = document.getElementById("contactForm")
    const formResults = document.getElementById("formResults")
  
    // Add event listener for form submission
    contactForm.addEventListener("submit", (event) => {
      // Prevent the default form submission
      event.preventDefault()
  
      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value
  
      // Create HTML content for displaying the form data
      const resultsHTML = `
        <h3>Thank you for your message!</h3>
        <p><span class="highlight">Name:</span> ${name}</p>
        <p><span class="highlight">Email:</span> ${email}</p>
        <p><span class="highlight">Message:</span> ${message}</p>
      `
  
      // Update the form results container with the form data
      formResults.innerHTML = resultsHTML
  
      // Show the form results container with animation
      formResults.style.display = "block"
      formResults.style.opacity = "0"
  
      // Animate the results appearance
      let opacity = 0
      const fadeIn = setInterval(() => {
        if (opacity >= 1) {
          clearInterval(fadeIn)
        }
        formResults.style.opacity = opacity
        opacity += 0.1
      }, 30)
  
      // Scroll to the results
      setTimeout(() => {
        formResults.scrollIntoView({ behavior: "smooth" })
      }, 300)
  
      // Reset the form
      contactForm.reset()
    })
  
    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll(".nav-links a")
    navLinksItems.forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("show")) {
          navLinks.classList.remove("show")
        }
      })
    })
  })
  