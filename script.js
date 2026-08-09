// nav menu
const diclik = document.querySelector('#mobile-menu');

diclik.addEventListener('click', (e)=>{
    document.querySelector('.nav').classList.toggle("mobile-nav");
   e.currentTarget.classList.toggle('is-active');
});

function closeNav() {
    document.querySelector('.nav').classList.remove("mobile-nav");
    
}

// SECTION HERO
let currentIndex = 0;
        let autoPlayInterval;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = slides.length;

        // Show specific slide
        function showSlide(index) {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Add active class to current slide and dot
            slides[index].classList.add('active');
            // dots[index].classList.add('active');
        }

        // Change slide (prev/next)
        function changeSlide(direction) {
            currentIndex += direction;

            // Loop around
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            }

            showSlide(currentIndex);
            resetAutoPlay();
        }

        // Go to specific slide
        function currentSlide(index) {
            currentIndex = index;
            showSlide(currentIndex);
            resetAutoPlay();
        }

        // Auto play carousel
        function autoPlay() {
            autoPlayInterval = setInterval(() => {
                currentIndex++;
                if (currentIndex >= totalSlides) {
                    currentIndex = 0;
                }
                showSlide(currentIndex);
            }, 4000); // Change slide every 4 seconds
        }

        // Reset auto play when user interacts
        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            autoPlay();
        }

        // Start auto play on page load
        autoPlay();

        // Pause auto play on hover
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            autoPlay();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                changeSlide(-1);
            } else if (e.key === 'ArrowRight') {
                changeSlide(1);
            }
        });

        // Touch/Swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carouselContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left
                changeSlide(1);
            }
            if (touchEndX > touchStartX + 50) {
                // Swipe right
                changeSlide(-1);
            }
        }

        // CTA Button functionality
        function startJourney() {
            alert('Thank you for your interest! We would love to help plan your special day.');
            console.log('Start Your Journey clicked');
        }

        // Preload images for smooth transitions
        window.addEventListener('load', () => {
            slides.forEach(slide => {
                const img = slide.querySelector('img');
                if (img) {
                    const tempImg = new Image();
                    tempImg.src = img.src;
                }
            });
        });

        // counter
const counters = document.querySelectorAll('.counter');

const startCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let current = 0;
  const speed = 300;

  const updateCounter = () => {
    const increment = target / speed;

    if (current < target) {
      current += increment;
      counter.textContent = Math.ceil(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
};
// Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target); // biar cuma jalan sekali
    }
  });
}, {
  threshold: 0.5 // muncul minimal 50% di layar
});

// Observe semua counter
counters.forEach(counter => {
  observer.observe(counter);
});

// animation

const anim = document.querySelectorAll('.scroll-anim');
const observe = new IntersectionObserver((e)=>{
  e.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
  })
},{threshold:0.4});

anim.forEach((key)=>
  {observe.observe(key);
})
// Observe semua counter
counters.forEach(counter => {
  observer.observe(counter);
});

// paket section

const cards = [
    {
      id: 1,
      tag: "PAKET NASIONAL",
      img: "./assets/ca99c9f66dd2e9cfffacd0bb902fc2d6.jpg",
      title: "Paket Nasional  ( RUMAH / AULA )",
      excerpt: "pernikahan adalah momen yang sangat spesial dalam kehidupan setiap pasangan. kami berkomitmen untuk memberikan layanan terbaik untuk mewujudkan pernikahan impian Anda.",
      fullText: `<h1 style="color: #000"> RP 29.500.000</h1>
      <p><strong>1. Rias Pengantin</strong> <br/> A. Rias <br/>- Pengantin ( Akad & Resepsi ) <br/>- 2 Orang tua Wanita <br/>- 4 Orang Penjaga Buku Tamu <br/>- 4 Orang Among Tamu</p>
      <p>B. Busana <br/>- Busana Orang Tua Pria & Wanita <br/>- Busana Penjaga Buku Tamu <br/>- Busana Among Tamu </p>
      <p>C. Bunga <br/>- Bunga Melati Pengantin <br/>- Bunga Melati Orang Tua Wanita <br/>- Buku Tamu <br/>- Handbouqe</p>
      <p><strong>2. Dekorasi</strong> <br/>A. 1 set Pelaminan <br/>- Gebyok Modifikasi <br/>- Taman Pelaminan</p>
      <p>B. 4 Tambahan <br/>- 8 Standing Flower <br/>- Karpet Jalan <br/>- Gajebo Jalan <br/>- Pergola</p>
      <p>C. 2 Buah Tambahan <br/>- 2 Peti Uang / Kontak Angpao <br/>- Background Meja Tamu <br/>- Gajebo Jalan <br/>- Pergola</p>
      <p>D. 2 Buah Janur (Besar)</p>
      <p><strong>3. Video Shooting + Foto</strong> <br/>- Foto + CD Foto <br/>- Video + CD <br/>- Album Kolase 10 Set <br/>- 1 Bingkai & Foto 10R <br/>- 2 Buah Standing Foto <br/>- Durasi Akad & Resepsi</p>
      <p>B. 4 Tambahan <br/>- 8 Standing Flower <br/>- Karpet Jalan <br/>- Gajebo Jalan <br/>- Pergola</p>
      <p><strong>4. MC Nasional Akad / Resepsi</strong></p>
      
      `
    },
    {
      id: 2,
      tag: "PAKET SUPER HEMAT",
      img: "./assets/dekor-rumah.jpeg",
      title: "PAKET SUPER HEMAT RUMAH",
      excerpt: "Setiap pernikahan adalah cerita cinta yang unik. Kami memperlakukan setiap pasangan dengan perhatian dan kepedulian yang tulus, seperti keluarga sendiri.",
      fullText: `<h1 style="color: #000"> RP 23.500.000</h1>
      <p><strong>1. Rias Pengantin</strong> <br/> A. Rias <br/>- Pengantin ( Akad & Resepsi ) <br/>- 2 Orang tua Wanita <br/>- 2 Orang Penjaga Buku Tamu <br/>- 2 Orang Among Tamu</p>
      <p>B. Busana <br/>- Busana Orang Tua Pria & Wanita <br/>- Busana Penjaga Buku Tamu <br/>- Busana Among Tamu </p>
      <p>C. Bunga <br/>- Bunga Melati Pengantin <br/>- Buku Tamu <br/></p>
      <p><strong>2. Dekorasi</strong> <br/>A. 1 set Pelaminan <br/>- Gebyok Modifikasi </p>
      <p>B. 2 Peti Uang / Kontak Angpao <br/>- Meja Tamu</p>
      <p>C. 2 Buah Janur (KECIL) <br/></p>
      <p><strong>3. Video Shooting + Foto</strong> <br/>- Foto + CD Foto <br/>- Video + CD <br/>- Album Kolase 10 Set <br/>- 1 Bingkai & Foto 10R <br/>- Durasi Akad & Resepsi</p>      
      `
    },
    {
      id: 3,
      tag: "PAKET ISTIMEWA",
      img: "https://images.unsplash.com/photo-1738225734899-30852be7e396?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kb25lc2lhJTIwd2VkZGluZyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D",
      title: "PAKET ISTIMEWA  (GEDUNG)",
      excerpt: "Makanan bukan sekadar kebutuhan biologis. Ia adalah ekspresi budaya, cinta, dan identitas suatu bangsa.",
      date: "25 Mar 2025",
      readTime: "4 menit baca",
      author: "Dewi Puspita",
      fullText: `<h1 style="color: #000"> RP 52.500.000</h1>
      <p><strong>1. Rias Pengantin</strong> <br/> A. Rias <br/>- Pengantin ( Akad & Resepsi ) <br/>- 2 Orang tua Wanita <br/>- 4 Orang Penjaga Buku Tamu <br/>- 4 Orang Among Tamu</p>
      <p>B. Busana <br/>- Busana Orang Tua Pria & Wanita <br/>- Busana Penjaga Buku Tamu <br/>- Busana Among Tamu </p>
      <p>C. Bunga <br/>- Bunga Melati Pengantin <br/>- Bunga Melati Orang Tua Wanita <br/>- Buku Tamu <br/>- Handbouqe</p>
      <p><strong>2. Dekorasi</strong> <br/>A. 1 set Pelaminan <br/>- Gebyok Modifikasi <br/>- Taman Pelaminan</p>
      <p>B. 4 Tambahan <br/>- 8 Standing Flower <br/>- Karpet Jalan <br/>- Gajebo Jalan <br/>- Pergola</p>
      <p>C. 2 Buah Tambahan <br/>- 2 Peti Uang / Kontak Angpao <br/>- Background Meja Tamu <br/>- Gajebo Jalan <br/>- Pergola</p>
      <p>D. 2 Buah Janur (Besar)</p>
      <p><strong>3. Video Shooting + Foto</strong> <br/>- Foto + CD Foto <br/>- Video + CD <br/>- Album Kolase 10 Set <br/>- 2 Bingkai & Foto 10R <br/>- 2 Buah Standing Foto <br/>- Durasi Akad & Resepsi</p>
      <p>B. 4 Tambahan <br/>- 8 Standing Flower <br/>- Karpet Jalan <br/>- Gajebo Jalan <br/>- Pergola</p>
      <p><strong>4. MC Nasional Akad / Resepsi</strong></p>
      <p><strong>5. Foto Pre - Wedding Indoor</strong></p>
      
      `
    },
 ];

const gridCard = document.getElementById("grid-card-paket");
const backdrop = document.getElementById("modal-backdrop-paket");
const modalClose = document.getElementById("modal-close-paket");

function renderCards() {
    cards.forEach((card)=>{
        const el = document.createElement('article');
        el.className = "card-paket";
        el.innerHTML =`
        <div class="card-img-wrap-paket">
            <img src="${card.img}" alt="${card.title}" loading="lazy"/>
            <div class="card-img-overlay-paket"></div>
            <span class="card-tag-paket">${card.tag}</span>
         </div>
         <div class="card-body-paket">
            <h2 class="card-title">${card.title}</h2>
            <p class="card-excerpt">${card.excerpt}</p>
         </div>
         
         `;

         el.addEventListener('click', () => openModal(card));
         el.addEventListener('keypress', (e) => {if (e.key === 'Enter') openModal(card)});
        gridCard.appendChild(el);

    })
}

function openModal(card) {
  document.getElementById('modal-img-paket').src= card.img;
  document.getElementById('modal-img-paket').alt= card.title;
  document.getElementById('modal-hero-tag-paket').textContent= card.tag;
  
  document.getElementById('modal-title').textContent= card.title;
  

  document.getElementById('modal-body').innerHTML = card.fullText;
  backdrop.classList.add('open');
  backdrop.body.style.overflow = 'hidden';
  document.getElementById('modal-close').scrollTop = 0;
}
function closeModal() {
  backdrop.classList.remove('open');
}

modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', (e) => {if(e.target === backdrop){closeModal()}});

// testimoni
 const testimonials = [
            {
                text1: "Aku seneng banget sama dekornya dan puas banget sama Service-nya. semua tim kerjanya totalitas banget.",
                text2: "Aku sangat puas sama kerja timnya, mereka sangat profesional dan hasilnya luar biasa. Aku pasti akan merekomendasikan mereka ke teman-teman aku yang mau nikah.",
                name: "Ibu Siti Khodijah",                
                photo: "./assets/testimoni1.png"
            },
            {
                text1: "Terima kasih tim Wenny Wedding. maaf udah merepotkan dengan request yang banyak, tapi kalian tetap sabar dan profesional banget. hasilnya juga luar biasa.",
                text2: "Designya bagus dan sesuai request.saya Berserta keluarga happy banget.",
                name: "Ananda Astri",
                photo: "./assets/testimoni2.png"
            },
            {
                text1: "Thank Team Wenny Wedding. I was really impressed with the level of professionalism and attention to detail they showed throughout the entire process.",
                text2: "The final result exceeded my expectations and I couldn't be happier with how everything turned out.",
                name: "Dias Putri",
                photo: "./assets/testimoni3.png"
            },
            {
                text1: "Thenks Team Wenny Wedding. bisa wujudkan acara lamaran aku yang simple tapi elegant. aku suka banget sama konsepnya yang unik dan kreatif.",
                text2: "Aku sangat merekomendasikan tim Wenny Wedding untuk siapa saja yang mencari jasa wedding planner yang profesional dan kreatif.",
                name: "Tias Putri Sari",
                photo: "./assets/testimoni4.png"
            },
            {
                text1: "ini adalah pengalaman terbaik yang pernah aku alami dalam merencanakan pernikahan. tim Wenny Wedding benar-benar mengerti apa yang aku inginkan dan mewujudkannya dengan sempurna.",
                text2: "saya dan keluarga sangat puas dengan hasilnya, dan aku pasti akan merekomendasikan tim Wenny Wedding",
                name: "Isminingsih",
                photo: "./assets/testimoni5.png"
            },
            {
                text1: "Terima kasih banyak untuk tim Wenny Wedding yang sudah membantu merencanakan pernikahan kami dengan sangat baik. semua berjalan lancar dan sesuai dengan yang kami harapkan.",
                text2: "kami sangat puas dengan hasilnya, dan aku pasti akan merekomendasikan tim Wenny Wedding kepada siapa saja yang mencari jasa wedding planner yang profesional dan berkualitas.",
                name: "Lisa dewi",
                photo: "./assets/testimoni6.png"
            }
        ];




function updateTestimonial(index) {
            const testimonial = testimonials[index];
            document.getElementById('testimonial-text-1').textContent = testimonial.text1;
            document.getElementById('testimonial-text-2').textContent = testimonial.text2;
            document.getElementById('client-name').textContent = testimonial.name;
            document.getElementById('client-title').textContent = testimonial.title;
            document.getElementById('client-photo').src = testimonial.photo;

            // Update active dot
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }


function nextSlide() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial(currentIndex);
        }

        // Initialize first testimonial
        updateTestimonial(0);

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);

//Wahtsapp
const phone = "6281382381330";

const message = `Halo Kak 😊,


Saya sedang merencanakan pernikahan dan tertarik menggunakan jasa
WS Wedding.

Boleh saya mendapatkan informasi mengenai paket, harga, dan jadwal yang masih tersedia?

Terima kasih.`;

document.getElementById("waButton").href =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;










renderCards();
