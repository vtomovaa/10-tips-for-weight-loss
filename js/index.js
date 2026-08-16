// NAVBAR TOGGLE
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const dropbtn = document.querySelector('.dropbtn');

// Toggle dropdown visibility on button click
dropbtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the document
    dropdownContent.classList.toggle('show'); // Toggle 'show' class
});

// Close dropdown if clicked outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdownContent.classList.remove('show'); // Remove 'show' class
    }
});

// Close dropdown when clicking on any link
const dropdownLinks = dropdownContent.querySelectorAll('a'); // Select all links in the dropdown

dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdownContent.classList.remove('show'); // Hide dropdown content
    });
});


// FAQ
const faqItems = document.querySelectorAll(".faq-content");

function setFaqState(item, isOpen) {
  item.classList.toggle("active", isOpen);

  const question = item.querySelector(".q");
  if (question) {
    question.setAttribute("aria-expanded", String(isOpen));
  }
}

faqItems.forEach((item) => {
  const question = item.querySelector(".q");
  if (!question) return;

  question.setAttribute("role", "button");
  question.setAttribute("tabindex", "0");
  question.setAttribute("aria-expanded", "false");

  const toggleFaq = () => {
    const shouldOpen = !item.classList.contains("active");

    faqItems.forEach((faqItem) => setFaqState(faqItem, false));

    if (shouldOpen) {
      setFaqState(item, true);
    }
  };

  question.addEventListener("click", toggleFaq);
  question.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFaq();
    }
  });
});

// Sidebar form popup
const popup = document.getElementById('share-popup');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  popup.style.display = 'flex';
  form.reset();
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Footer form popup
const footerPopup = document.getElementById('footer-share-popup');
const footerCloseBtn = document.querySelector('.footer-close');
const footerForm = document.getElementById('footer-form');

footerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  footerPopup.style.display = 'flex';
  footerForm.reset();
});

footerCloseBtn.addEventListener('click', () => {
  footerPopup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === footerPopup) {
    footerPopup.style.display = 'none';
  }
});


// Highlight the current tip while scrolling
const sections = [...document.querySelectorAll('.col-2 h3[id^="tip"]')];
const navLinks = [...document.querySelectorAll(".nav-link")];

function updateActiveNavigation() {
  if (!sections.length || !navLinks.length) return;

  const activationLine = 180;
  let currentId = sections[0].id;

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= activationLine) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.parentElement.classList.toggle("active", isActive);
  });
}

window.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("resize", updateActiveNavigation);
updateActiveNavigation();
