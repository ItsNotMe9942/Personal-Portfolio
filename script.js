/* Toggle navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
}
/* Scroll section active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });
}

/* Sticky navbar */
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/* Remove toggle icon and navbar */
menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');

/* Scroll reveal */
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/* Typed js */
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Web Designer', 'Software Developer', 'Coding Aficionado!'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
})

/* Contact form */
const form = document.getElementById('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');


function sendEmail() {

  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}<br>`;
    
  Email.send({
    SecureToken: "64dbbd21-2696-4b1d-9f5e-dc9a4f788fcf",
    Username : "christopher.reay85@gmail.com",
    Password : "DBFCA201385402827CB4E146E270B58B8EB7",
    To : 'christopher.reay85@gmail.com',
    From : "christopher.reay85@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if (message == 'OK') {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }
);
}

function checksInputs() {
  const items = document.querySelectorAll('.item');

  for (const item of items) {
    if (item.value == '') {
      item.classList.add('error');
      item.parentElement.classList.add('error');
    }

    if (items[1].value != '') {
      checkEmail();
    }

    items[1].addEventListener('keyup', () => {
      checkEmail();
    })

    item.addEventListener("keyup", () => {
      if (item.value != '') {
        item.classList.remove('error');
        item.parentElement.classList.remove('error');
      } 
      else {
        item.classList.add('error');
        item.parentElement.classList.add('error');
      }
    })
  }
}

function checkEmail() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errorTextEmail = document.querySelector('.error-text.email')
  ;

  if (!email.value.match(emailRegex)) {
    email.classList.add('error');
    email.parentElement.classList.add('error');

if (email.value != '') {
  errorTextEmail.innerHTML = "Enter a valid email address"
} else {
  errorTextEmail.innerHTML = "Email can't be blank"
}

  } else {
    email.classList.remove('error');
    email.parentElement.classList.remove('error');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  checksInputs();

  if (!fullName.classList.contains('error') && !email.classList.contains('error') && !phone.classList.contains('error') && !subject.classList.contains('error') && !mess.classList.contains('error')) {
    sendEmail();

    form.reset();
    return false;
  }
});

