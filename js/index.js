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


// faq

let faqItems = document.querySelectorAll(".faq-content");

const onClickFaq = (e) => {
  const answer = e.currentTarget.querySelector(".a");
  const symbol = e.currentTarget.querySelector(".toggle-symbol");

  // Close all other answers
  faqItems.forEach(item => {
    const itemAnswer = item.querySelector(".a");
    const itemSymbol = item.querySelector(".toggle-symbol");
    if (itemAnswer !== answer) {
      itemAnswer.style.display = "none";
      itemSymbol.textContent = "+";
    }
  });

  // Toggle the clicked answer
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    symbol.textContent = "-";
  } else {
    answer.style.display = "none";
    symbol.textContent = "+";
  }

};

faqItems.forEach(item => {
  item.addEventListener("click", onClickFaq);
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


// colored scroll

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("h3"); // All the sections with the h3 tags (your tips)
  const navLinks = document.querySelectorAll(".nav-link"); // All navigation links

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      // Add the 'active' class to the corresponding li
      navLinks[index].parentElement.classList.add("active");
    } else {
      // Remove the 'active' class if it's not in view
      navLinks[index].parentElement.classList.remove("active");
    }
  });
});