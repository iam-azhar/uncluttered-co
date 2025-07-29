// Portfolio data
const portfolioItems = [
  {
    id: 1,
    category: "thumbnail",
    title: "Gaming Channel Thumbnail",
    description: "Action-packed thumbnail for gaming content",
    likes: "1.2K",
    views: "45K",
    icon: "",
  },
  {
    id: 2,
    category: "social",
    title: "Instagram Post Design",
    description: "Vibrant social media post for lifestyle brand",
    likes: "890",
    views: "12K",
    icon: "📱",
  },
  {
    id: 3,
    category: "thumbnail",
    title: "Educational Content Thumbnail",
    description: "Clean, informative thumbnail design",
    likes: "756",
    views: "23K",
    icon: "📚",
  },
  {
    id: 4,
    category: "social",
    title: "Twitter Header Design",
    description: "Professional header for content creator",
    likes: "634",
    views: "8K",
    icon: "🐦",
  },
  {
    id: 5,
    category: "thumbnail",
    title: "Tech Review Thumbnail",
    description: "Modern, tech-focused thumbnail design",
    likes: "1.5K",
    views: "67K",
    icon: "💻",
  },
  {
    id: 6,
    category: "social",
    title: "YouTube Community Post",
    description: "Engaging community post design",
    likes: "423",
    views: "5K",
    icon: "📺",
  },
];

// DOM Elements
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const portfolioGrid = document.getElementById("portfolioGrid");
const contactForm = document.getElementById("contactForm");

// Navigation functionality
let isNavOpen = false;

// Scroll effect for navigation
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Mobile navigation toggle
navToggle.addEventListener("click", () => {
  isNavOpen = !isNavOpen;
  navLinks.style.display = isNavOpen ? "flex" : "none";

  // Animate hamburger
  const spans = navToggle.querySelectorAll("span");
  if (isNavOpen) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Close mobile nav if open
      if (isNavOpen) {
        navToggle.click();
      }
    }
  });
});

// Scroll functions for buttons
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function scrollToWork() {
  document.getElementById("work").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Portfolio functionality
let currentFilter = "all";

function renderPortfolio() {
  const filteredItems =
    currentFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === currentFilter);

  portfolioGrid.innerHTML = filteredItems
    .map(
      (item, index) => `
        <div class="portfolio-item scroll-reveal" style="animation-delay: ${
          index * 100
        }ms">
            <div class="portfolio-image">
                <span style="font-size: 4rem;">${item.icon}</span>
            </div>
            <div class="portfolio-content">
                <div class="portfolio-category ${item.category}">
                    ${
                      item.category === "thumbnail"
                        ? "Thumbnail"
                        : "Social Media"
                    }
                </div>
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
                <div class="portfolio-stats">
                    <span>❤️ ${item.likes} likes</span>
                    <span>👁️ ${item.views} views</span>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  // Re-trigger scroll reveal for new items
  revealOnScroll();
}

// Filter functionality
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active state
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Update filter and re-render
    currentFilter = btn.dataset.filter;
    renderPortfolio();
  });
});

// Contact form functionality
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Show success message (you can replace this with actual form submission)
  showNotification(
    "Message sent! I'll get back to you within 24 hours.",
    "success"
  );

  // Reset form
  contactForm.reset();
});

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

  // Add notification styles if not already added
  if (!document.querySelector("#notification-styles")) {
    const styles = document.createElement("style");
    styles.id = "notification-styles";
    styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                min-width: 300px;
                padding: 16px;
                border-radius: 8px;
                box-shadow: var(--shadow-creative);
                animation: slideInRight 0.3s ease-out;
            }
            
            .notification-success {
                background: var(--gradient-primary);
                color: white;
            }
            
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 12px;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                font-size: 20px;
                cursor: pointer;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
            
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
    document.head.appendChild(styles);
  }

  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Scroll reveal functionality
function revealOnScroll() {
  const elements = document.querySelectorAll(".scroll-reveal");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.8) {
      element.classList.add("revealed");
    }
  });
}

// Parallax effect for floating elements
function updateParallax() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".floating-element");

  parallaxElements.forEach((element, index) => {
    const speed = (index + 1) * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
}

// Typing effect for hero title
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

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Render initial portfolio
  renderPortfolio();

  // Initial scroll reveal check
  revealOnScroll();

  // Add scroll event listeners
  window.addEventListener("scroll", () => {
    revealOnScroll();
    updateParallax();
  });

  // Add resize event listener
  window.addEventListener("resize", () => {
    // Close mobile nav on resize
    if (window.innerWidth > 768 && isNavOpen) {
      navToggle.click();
    }
  });

  // Add some interactive hover effects
  addInteractiveEffects();
});

// Interactive effects
function addInteractiveEffects() {
  // Add magnetic effect to buttons
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });

  // Add tilt effect to cards
  document
    .querySelectorAll(".service-card, .testimonial-card, .process-card")
    .forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const rotateX = (mouseY - centerY) / 10;
        const rotateY = (centerX - mouseX) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
}

// Utility functions for external use
window.portfolioUtils = {
  scrollToContact,
  scrollToWork,
  showNotification,
  revealOnScroll,
};

// Add some Easter eggs
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code);

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (
    konamiCode.length === konamiSequence.length &&
    konamiCode.every((code, index) => code === konamiSequence[index])
  ) {
    // Easter egg: rainbow animation
    document.body.style.animation = "rainbow 2s ease-in-out";
    showNotification(
      "🌈 Konami Code activated! You found the Easter egg!",
      "success"
    );

    // Add rainbow animation
    if (!document.querySelector("#rainbow-styles")) {
      const styles = document.createElement("style");
      styles.id = "rainbow-styles";
      styles.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    50% { filter: hue-rotate(180deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
      document.head.appendChild(styles);
    }

    setTimeout(() => {
      document.body.style.animation = "";
    }, 2000);

    konamiCode = [];
  }
});

console.log(
  "🎨 Welcome to Gautam's Creative Portfolio! Built with love and creativity. Try the Konami Code for a surprise! 😉"
);
