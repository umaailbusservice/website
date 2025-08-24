

const images = document.querySelectorAll('#slider img')
let index = 0;

setInterval(() => {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}, 3000); // Image changes every 3 seconds



// Animate hero headline line by line
gsap.from(".line", {
  y: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  delay: 0.6
});

  gsap.from(".left", {
    y: -30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "power2.out",
  delay: 0.3  
  });

  // Then animate the contact-info
  gsap.from(".contact-info", {
    opacity: 0,
    y: -20,
    delay: 0.8,
    duration: 1,
    ease: "power2.out"
  });

let current = 0;

setInterval(() => {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}, 2000); // every 2 seconds



document.getElementById("simpleBusForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const organization = document.getElementById("organization").value;
  const purpose = document.getElementById("purpose").value;
  const seats = document.getElementById("seats").value;
  const message = document.getElementById("message").value;

  const finalMessage = `Bus Booking Request:%0AName: ${name}%0AOrganization: ${organization}%0APurpose: ${purpose}%0ASeat Count: ${seats}%0AExtra Message: ${message}`;

  const whatsappUrl = `https://wa.me/918951295139?text=${finalMessage}`;
  window.open(whatsappUrl, "_blank");
});

  
  const counter = document.getElementById('counter');
  let count = 0;
  const target = 40;

  const interval = setInterval(() => {
    count++;
    counter.innerText = count;
    if (count === target) {
      counter.innerText = count ;
      clearInterval(interval);
    }
  }, 100);


  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });


  

  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });

