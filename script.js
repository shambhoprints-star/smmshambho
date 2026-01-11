let selectedService="";
function selectService(service){selectedService=service;alert("Selected Service: "+service);}
function sendWhatsApp(){
  if(!selectedService){alert("Please select a service first!");return;}
  const number="917559404077";
  const message=encodeURIComponent("Hello! I want to order: "+selectedService);
  window.open("https://wa.me/"+number+"?text="+message,"_blank");
}

// Accordion toggle
const accItems=document.querySelectorAll('.accordion-item');
accItems.forEach(item=>{
  const btn=item.querySelector('.accordion-btn');
  btn.addEventListener('click',()=>{
    accItems.forEach(i=>{if(i!==item){i.classList.remove('active');}});
    item.classList.toggle('active');
  });
});

// Fade-up animation
const faders=document.querySelectorAll('.fade-up');
const appearOptions={threshold:0.2};
const appearOnScroll=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
},appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

// Reviews carousel
const reviews=document.getElementById('reviewsCarousel');
let reviewsScroll=0;
function scrollReviews(){reviewsScroll+=1;if(reviewsScroll>=reviews.scrollWidth-reviews.clientWidth)reviewsScroll=0;reviews.scrollTo({left:reviewsScroll,behavior:'smooth'});}
let reviewsInterval=setInterval(scrollReviews,50);
reviews.addEventListener('mouseenter',()=>clearInterval(reviewsInterval));
reviews.addEventListener('mouseleave',()=>reviewsInterval=setInterval(scrollReviews,50));

// Services carousel
const services=document.getElementById('servicesSlides');
let servicesScroll=0;
function scrollServices(){servicesScroll+=1;if(servicesScroll>=services.scrollWidth-services.clientWidth)servicesScroll=0;services.scrollTo({left:servicesScroll,behavior:'smooth'});}
let servicesInterval=setInterval(scrollServices,40);
services.addEventListener('mouseenter',()=>clearInterval(servicesInterval));
services.addEventListener('mouseleave',()=>servicesInterval=setInterval(scrollServices,40));

// Hero particles
const canvas=document.getElementById('heroParticles');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth; canvas.height=window.innerHeight;
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
const particlesArray=[];const colors=['#ffcc33','#ff416c','#ff4b2b','#25d366','#ffffff'];
const maxParticles=80;
class Particle{constructor(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.size=Math.random()*3+1;this.speedX=(Math.random()-0.5)*1;this.speedY=(Math.random()-0.5)*1;this.color=colors[Math.floor(Math.random()*colors.length)];}update(){this.x+=this.speedX;this.y+=this.speedY;if(this.x<0||this.x>canvas.width)this.speedX*=-1;if(this.y<0||this.y>canvas.height)this.speedY*=-1;}draw(){ctx.fillStyle=this.color;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fill();}}
function initParticles(){particlesArray.length=0;for(let i=0;i<maxParticles;i++){particlesArray.push(new Particle());}}
initParticles();
function animateParticles(){ctx.clearRect(0,0,canvas.width,canvas.height);particlesArray.forEach(p=>{p.update();p.draw();});requestAnimationFrame(animateParticles);}
animateParticles();
