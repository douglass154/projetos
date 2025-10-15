const serviceCardContainer = document.querySelector(".services-card-container");

const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav a");

const services = [
   {
      icon: "fab fa-buffer",
      serviceTitle: "Desenvolvimento Full stack",
   },
   {
      icon: "fas fa-bold",
      serviceTitle: "Sites leves e rápidos",
   },
   {
      icon: "fas fa-cart-plus",
      serviceTitle: "E-commerces",
   },
   {
      icon: "fas fa-chart-line",
      serviceTitle: "SEO",
   },
   {
      icon: "fas fa-chess-pawn",
      serviceTitle: "Estratégias de Marketing",
   },
   {
      icon: "fas fa-cloud",
      serviceTitle: "Hospedagem AWS/Azure",
   },
];

services.forEach(service => {
   serviceCardContainer.innerHTML += `
      <div class="services-card">
         <i class="${service.icon}"></i>
         <h3>${service.serviceTitle}</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis at repellendus eligendi quod ut officia quia, quaerat assumenda consectetur. Eius aliquam molestias sapiente adipisci vitae sed possimus in ut minus odit, quasi quos voluptates, commodi impedit necessitatibus, laudantium animi nisi cupiditate distinctio incidunt illum eaque. Iste, voluptatibus.</p>
      </div>
   `;
});

const openMenu = () => {
   nav.classList.toggle("hidden");

   if (menu.classList.contains("fa-bars")) {
      menu.classList.add("fa-solid", "fa-x");
      menu.classList.remove("fas", "fa-bars");
      animateLinks();
   } else {
      menu.classList.add("fas", "fa-bars");
      menu.classList.remove("fa-solid", "fa-x");
      resetLinkAnimations();
   }
};

const animateLinks = () => {
   const links = document.querySelectorAll("nav li");
   links.forEach(
      (link, index) =>
         (link.style.animation = `links-animation ${
            index / 7 + 0.3
         }s ease forwards 0.15s`)
   );
};

const resetLinkAnimations = () => {
   const links = document.querySelectorAll("nav li");
   links.forEach(link => (link.style.animation = "none"));
};

links.forEach(link => {
   link.addEventListener("click", () => {
      menu.classList.add("fas", "fa-bars");
      menu.classList.remove("fa-solid", "fa-x");

      nav.classList.add("hidden");
      resetLinkAnimations();
   });
});

menu.addEventListener("click", openMenu);
