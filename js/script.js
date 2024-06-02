"strict-mode";

// ALERT VAR
const heroEl = document.querySelector(".section-hero");
const allLinks = document.querySelectorAll("a:link");
const buttonNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const year = document.querySelector(".year");

const newYear = new Date().getFullYear();

year.textContent = newYear;

// FUNCTIONS
const openNav = function () {
  header.classList.toggle("nav-open");
};

const scrollSmooth = function (href) {
  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (href !== "#" && href.startsWith("#")) {
    const goTo = document.querySelector(href);

    goTo.scrollIntoView({
      behavior: "smooth",
    });
    header.classList.remove("nav-open");
  }
};

// observe method
const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);

obs.observe(heroEl);

// EVENT LISTENER
buttonNav.addEventListener("click", openNav);

allLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    scrollSmooth(href);
  })
);
