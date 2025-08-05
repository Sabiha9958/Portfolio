// DOM Elements
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");
const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const projectModal = document.getElementById("project-modal");
const modalClose = document.querySelector(".close");
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

// Theme Management
let currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);

  const icon = themeToggle.querySelector("i");
  icon.className = currentTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Active Navigation Link
function updateActiveNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY <= sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

// Scroll Reveal Animation
function revealElements() {
  const reveals = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right"
  );

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("revealed");
    }
  });
}

window.addEventListener("scroll", revealElements);
revealElements(); // Initial call

// Skills Progress Animation
function animateSkills() {
  const skillBars = document.querySelectorAll(".progress-bar");
  skillBars.forEach((bar) => {
    const skillValue = bar.getAttribute("data-skill");
    if (bar.getBoundingClientRect().top < window.innerHeight) {
      bar.style.width = skillValue + "%";
    }
  });
}

window.addEventListener("scroll", animateSkills);

// Project Filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    // Update active button
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter projects
    projectCards.forEach((card) => {
      if (
        filter === "all" ||
        card.getAttribute("data-category").includes(filter)
      ) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 100);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// Project Modal
const projectData = {
  project1: {
    title: "Simon Says Game",
    description:
      "A web-based memory challenge inspired by the classic Simon Says. Users follow an increasingly complex pattern of color cues and sounds, testing their focus and reaction speed. ",
    technologies: ["HTML5", "CSS", "JavaScript"],
    features: [
      "Dynamic Pattern Generation",
      "Sound Effects & Visual Feedback ",
      "Score Tracking",
      "Responsive Design",
      "Intuitive Start Prompt",
      "Reset Logic",
    ],
    liveUrl: "https://sabiha9958.github.io/Simon-Say/",
    githubUrl: "https://github.com/Sabiha9958/Simon-Say",
  },
  project2: {
    title: "E-Commerce Platform",
    description:
      "A clean, vibrant menu section featuring global flavors—Korean, Italian, Indian—paired with rich imagery and “Add to Cart” buttons for seamless user engagement. Simple, stylish, and built for appetites and action.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    features: [
      "Multicultural Dishes",
      "Product browsing and search",
      "Intuitive Layout",
      "Add to Cart Functionality",
      "Order tracking",
      "Visual Appeal",
      "Descriptive Copy",
    ],
    liveUrl: "https://sabiha9958.github.io/Index1/",
    githubUrl: "https://github.com/Sabiha9958/Index1",
  },
  project3: {
    title: "Weather Dashboard",
    description:
      "An interactive weather application that provides real-time weather information, forecasts, and beautiful data visualizations. Built with vanilla JavaScript and modern CSS.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Interactive weather charts",
      "Location-based weather",
      "Weather alerts",
      "Responsive design",
    ],
    liveUrl: "https://sabiha9958.github.io/Weather/",
    githubUrl: "https://github.com/Sabiha9958/Weather",
  },
  project4: {
    title: "TrackIt",
    description:
      "A sleek and responsive dashboard designed to simplify personal budgeting and expense tracking. TrackIt provides users with visual insights into their financial habits using charts and summaries, helping them make smarter decisions effortlessly.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    features: [
      "Real-time Expense Tracking",
      "Budget Progress Monitor",
      "Interactive Visualizations",
      "Real-time updates",
      "Progress tracking",
      "Secure User Authentication",
      "Responsive UI",
    ],
    liveUrl: "https://sabiha9958.github.io/TrackIt/",
    githubUrl: "https://github.com/Sabiha9958/TrackIt",
  },
  project5: {
    title: "To-Do-App",
    description:
      "A sleek and motivational task manager built to boost productivity with clarity and flair. Designed around simplicity and user motivation, the app displays task stats at a glance while fostering focus with thoughtful design and uplifting quotes.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    features: [
      "Motivational Element",
      "Task Breakdown",
      "Progress Indicator",
      "Dark Mode Icon",
      "Minimal UI",
      "Settings Access",
    ],
    liveUrl: "https://sabiha9958.github.io/To-Do-List/",
    githubUrl: "https://github.com/Sabiha9958/To-Do-List",
  },
};

function openModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        
        <h3>Technologies Used:</h3>
        <div class="tech-stack" style="margin-bottom: 1.5rem;">
            ${project.technologies
              .map((tech) => `<span class="tech-tag">${tech}</span>`)
              .join("")}
        </div>
        
        <h3>Key Features:</h3>
        <ul style="margin-bottom: 2rem; color: var(--text-secondary);">
            ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        
        <div class="modal-buttons" style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="${project.liveUrl}" class="btn-primary" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="${
              project.githubUrl
            }" class="btn-secondary" target="_blank">
                <i class="fab fa-github"></i> View Code
            </a>
        </div>
    `;

  projectModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Close modal
modalClose.addEventListener("click", () => {
  projectModal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    projectModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Form Validation
const formValidation = {
  name: {
    required: true,
    minLength: 2,
    pattern: /^[a-zA-Z\s]+$/,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  message: {
    required: true,
    minLength: 10,
  },
};

function validateField(fieldName, value) {
  const rules = formValidation[fieldName];
  if (!rules) return { isValid: true, message: "" };

  if (rules.required && !value.trim()) {
    return { isValid: false, message: `${fieldName} is required` };
  }

  if (rules.minLength && value.trim().length < rules.minLength) {
    return {
      isValid: false,
      message: `${fieldName} must be at least ${rules.minLength} characters long`,
    };
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    if (fieldName === "email") {
      return { isValid: false, message: "Please enter a valid email address" };
    }
    if (fieldName === "name") {
      return {
        isValid: false,
        message: "Name should contain only letters and spaces",
      };
    }
  }

  return { isValid: true, message: "" };
}

function showError(fieldName, message) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  const inputElement = document.getElementById(fieldName);

  errorElement.textContent = message;
  inputElement.style.borderColor = message
    ? "var(--error-color)"
    : "transparent";
}

// Real-time validation
["name", "email", "message"].forEach((fieldName) => {
  const input = document.getElementById(fieldName);
  input.addEventListener("blur", () => {
    const validation = validateField(fieldName, input.value);
    showError(fieldName, validation.message);
  });

  input.addEventListener("input", () => {
    if (document.getElementById(`${fieldName}-error`).textContent) {
      const validation = validateField(fieldName, input.value);
      showError(fieldName, validation.message);
    }
  });
});

// Form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  let isValid = true;

  ["name", "email", "message"].forEach((fieldName) => {
    const value = formData.get(fieldName);
    const validation = validateField(fieldName, value);
    showError(fieldName, validation.message);
    if (!validation.isValid) isValid = false;
  });

  if (isValid) {
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
        // Clear any error messages
        ["name", "email", "message"].forEach((fieldName) => {
          showError(fieldName, "");
        });
      }, 2000);
    }, 2000);
  }
});

// Initialize animations on page load
window.addEventListener("load", () => {
  animateSkills();
  revealElements();
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// });
