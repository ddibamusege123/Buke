// script.js — small interactive bits
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.style.display = expanded ? 'none' : 'block';
  });
}

const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const result = document.getElementById('form-result');
    result.textContent = 'Thanks — your message was captured locally.\nTo actually send messages, connect a backend or an email service.';
    form.reset();
  });
}
