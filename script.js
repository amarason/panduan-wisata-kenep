/* ==========================================================================
   JELAJAH KENEP — Digital Thematic Travel Guide
   KKN Tim 2 IDBU 64 UNDIP 2026
   ========================================================================== */

const DESTINATIONS_DATA = [
    {
        id: "masjid-darussalam",
        route: "sejarah",
        category: "sejarah",
        categoryLabel: "Religi & Sejarah",
        number: "TITIK 01",
        name: "Masjid Darussalam",
        images: [
            "images/history/masjid-darussalam-1.jpeg",
            "images/history/masjid-darussalam-2.jpeg"
        ],
        description: "Masjid Darussalam merupakan masjid bersejarah di Kedunggudel yang diperkirakan berdiri sejak abad ke-14 dan berkaitan dengan penyebaran Islam oleh Kyai Lombok. Masjid ini dipercaya pernah menjadi tempat pertemuan Pakubuwono VI dan Pangeran Diponegoro pada masa kolonial Belanda. Keunikannya terletak pada mimbar kayu bergaya Majapahit, Sumur Kyai Pleret, dan bangunan berusia ratusan tahun yang masih terjaga hingga kini.",
        hours: "04.00 – 21.00 WIB",
        manager: "Pengurus Masjid",
        contact: "-",
        mapsUrl: "https://maps.app.goo.gl/c6DrfnWUXdV579AF9",
        nextId: "makam-kyai-lombok",
        nextName: "Makam Kyai Lombok",
        distance: "± 20 m"
    },
    {
        id: "makam-kyai-lombok",
        route: "sejarah",
        category: "sejarah",
        categoryLabel: "Religi & Sejarah",
        number: "TITIK 02",
        name: "Makam Kyai Lombok",
        images: [
            "images/history/makam-kyai-lombok.png"
        ],
        description: "Makam Kyai Lombok terletak di bagian belakang Masjid Darussalam, Kedunggudel, Sukoharjo. Makam ini merupakan tempat peristirahatan Kyai Lombok yang dikenal sebagai penyebar agama Islam di wilayah tersebut. Hingga kini, makam tersebut menjadi salah satu tujuan ziarah masyarakat.",
        hours: "Setiap Hari (24 Jam)",
        manager: "Juru Kunci Makam",
        contact: "-",
        mapsUrl: "https://maps.app.goo.gl/c6DrfnWUXdV579AF9",
        nextId: null,
        nextName: null,
        distance: null
    },
    {
        id: "batik-ayu-kusuma",
        route: "karya",
        category: "karya",
        categoryLabel: "Sentra Batik",
        number: "TITIK 01",
        name: "Batik Ayu Kusuma",
        images: [
            "images/craft-culinary/batik-ayu-kusuma-1.jpeg",
            "images/craft-culinary/batik-ayu-kusuma-2.jpeg"
        ],
        description: "Batik Ayu Kusuma merupakan usaha batik yang telah berkembang sejak tahun 1980-an dan merupakan generasi keempat dari Batik Kedunggudel. Sejak tahun 2000, usaha ini berganti nama menjadi Batik Ayu Kusuma dengan koleksi sekitar 100 motif batik cap dan batik tulis. Pengunjung dapat belajar membatik sekaligus membeli berbagai produk batik yang tersedia.",
        hours: "08.00 – 17.00 WIB",
        manager: "Mbak Ayu",
        contact: "0858-9410-1549",
        mapsUrl: "https://maps.app.goo.gl/A8ngQXmT1a1HCuGz8",
        nextId: "jenang-lestari",
        nextName: "Jenang dan Roti Lestari",
        distance: "± 500 m"
    },
    {
        id: "jenang-lestari",
        route: "karya",
        category: "kuliner",
        categoryLabel: "Kuliner Tradisional",
        number: "TITIK 02",
        name: "Jenang dan Roti Lestari",
        images: [
            "images/craft-culinary/jenang-roti-lestari-1.jpeg",
            "images/craft-culinary/jenang-roti-lestari-2.jpeg"
        ],
        description: "Jenang dan Roti Lestari merupakan usaha kuliner tradisional yang didirikan oleh Ibu Sri Lestari pada tahun 1986. Usaha ini memproduksi berbagai jenis jenang dan roti tradisional dengan cita rasa khas. Pengunjung dapat melihat langsung proses pembuatan jenang dan roti serta membeli produk yang dihasilkan.",
        hours: "Fleksibel",
        manager: "Lestari",
        contact: "0813-2912-9606",
        mapsUrl: "https://maps.app.goo.gl/84b3k5EMzdRqZ8dW9",
        nextId: "karak-rambak",
        nextName: "Karak dan Rambak Bu Ngatiyem",
        distance: "± 240 m"
    },
    {
        id: "karak-rambak",
        route: "karya",
        category: "kuliner",
        categoryLabel: "Oleh-Oleh Khas",
        number: "TITIK 03",
        name: "Karak dan Rambak Bu Ngatiyem",
        images: [
            "images/craft-culinary/karak-rambak-ngatiyem-1.jpeg",
            "images/craft-culinary/karak-rambak-ngatiyem-2.jpeg"
        ],
        description: "Karak dan Rambak Bu Ngatiyem merupakan usaha kuliner yang berdiri sejak tahun 1940 dan kini dikelola oleh Wahyu Wulandari. Usaha ini menyediakan oleh-oleh khas berupa karak dan rambak dengan cita rasa gurih. Pengunjung dapat membeli berbagai produk karak dan rambak sebagai buah tangan khas daerah.",
        hours: "08.00 – Selesai",
        manager: "Wahyu Wulandari",
        contact: "0882-2178-756",
        mapsUrl: "https://maps.app.goo.gl/koRWo6Q8CK7w9pVe7",
        nextId: null,
        nextName: null,
        distance: null
    }
];

// STATE CONTROL
let activeRoute = 'sejarah';
let activeFilter = 'all';

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    renderTimeline(activeRoute);
    renderDestinations(activeFilter);
    checkUrlHash();
});

/* NAVBAR TOGGLE FOR MOBILE */
function initNavbar() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }
}

/* SWITCH ROUTE TIMELINE WITH OPTIONAL AUTO-SCROLL */
function switchRoute(routeKey, autoScroll = false) {
    activeRoute = routeKey;
    
    // Update card selection UI
    const cardSejarah = document.getElementById('cardRouteSejarah');
    const cardKarya = document.getElementById('cardRouteKarya');
    
    if (routeKey === 'sejarah') {
        if (cardSejarah) cardSejarah.classList.add('active');
        if (cardKarya) cardKarya.classList.remove('active');
    } else {
        if (cardSejarah) cardSejarah.classList.remove('active');
        if (cardKarya) cardKarya.classList.add('active');
    }
    
    renderTimeline(routeKey);

    if (autoScroll) {
        scrollToTimeline();
    }
}

/* SCROLL TO TIMELINE WRAPPER */
function scrollToTimeline() {
    const timelineWrapper = document.getElementById('timelineWrapper') || document.querySelector('.timeline-wrapper');
    if (timelineWrapper) {
        const yOffset = -90; 
        const y = timelineWrapper.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Highlight animation
        timelineWrapper.style.transition = 'border-color 0.4s ease, box-shadow 0.4s ease';
        timelineWrapper.style.borderColor = 'var(--terracotta)';
        timelineWrapper.style.boxShadow = '0 12px 35px rgba(164, 93, 69, 0.2)';

        setTimeout(() => {
            timelineWrapper.style.borderColor = 'var(--border-color)';
            timelineWrapper.style.boxShadow = 'var(--shadow-sm)';
        }, 1800);
    }
}

/* RENDER VERTICAL TIMELINE */
function renderTimeline(routeKey) {
    const timelineContainer = document.getElementById('verticalTimeline');
    const timelineTitle = document.getElementById('timelineTitle');
    
    if (!timelineContainer) return;
    
    const items = DESTINATIONS_DATA.filter(item => item.route === routeKey);
    
    if (timelineTitle) {
        timelineTitle.textContent = routeKey === 'sejarah' 
            ? 'Peta Perjalanan: Jejak Sejarah' 
            : 'Peta Perjalanan: Karya & Rasa';
    }
    
    let html = '';
    items.forEach((item) => {
        html += `
            <div class="timeline-step">
                <div class="timeline-dot"></div>
                <div class="timeline-step-content">
                    <div class="timeline-step-info">
                        <div class="timeline-step-tag">${item.number} &bull; ${item.categoryLabel.toUpperCase()}</div>
                        <h4 class="timeline-step-name">${item.name}</h4>
                        <p class="timeline-step-desc">${item.description.substring(0, 110)}...</p>
                    </div>
                    <button class="btn btn-outline" onclick="scrollToDestination('${item.id}')">Lihat Detail</button>
                </div>
                ${item.distance ? `<div class="timeline-distance-badge">&darr; Jarak Tempuh: ${item.distance}</div>` : ''}
            </div>
        `;
    });
    
    timelineContainer.innerHTML = html;
}

/* FILTER DESTINATIONS */
function filterDestinations(categoryKey, btnElement) {
    activeFilter = categoryKey;
    
    // Update active filter button state
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    
    renderDestinations(categoryKey);
}

/* HELPER TO RENDER IMAGES CONTAINER (SINGLE OR MULTI PHOTO) */
function renderImageGallery(item) {
    const imgList = Array.isArray(item.images) && item.images.length > 0
        ? item.images
        : (item.image ? [item.image] : []);

    if (imgList.length === 0) {
        return `
            <div class="dest-card-image single">
                <img src="https://placehold.co/800x600/263B52/F5EBDD?text=${encodeURIComponent(item.name)}" alt="${item.name}">
            </div>
        `;
    }

    if (imgList.length === 1) {
        return `
            <div class="dest-card-image single" onclick="openPhotoModal('${imgList[0]}', '${item.name}')">
                <img src="${imgList[0]}" alt="${item.name} Desa Kenep" onerror="this.src='https://placehold.co/800x600/263B52/F5EBDD?text=${encodeURIComponent(item.name)}'">
                <div class="gallery-zoom-icon">🔍</div>
            </div>
        `;
    }

    // Multiple images layout (2 photos)
    let photosHtml = '';
    imgList.forEach((src, idx) => {
        photosHtml += `
            <div class="dest-gallery-item" onclick="openPhotoModal('${src}', '${item.name} Foto ${idx+1}')">
                <img src="${src}" alt="${item.name} Foto ${idx+1}" onerror="this.src='https://placehold.co/800x600/263B52/F5EBDD?text=${encodeURIComponent(item.name)}'">
                <div class="gallery-zoom-icon">🔍</div>
            </div>
        `;
    });

    return `
        <div class="dest-card-image multi multi-count-${imgList.length}">
            ${photosHtml}
        </div>
    `;
}

/* RENDER DESTINATION CARDS */
function renderDestinations(filterKey) {
    const container = document.getElementById('destinationsContainer');
    if (!container) return;
    
    let filteredData = DESTINATIONS_DATA;
    if (filterKey !== 'all') {
        filteredData = DESTINATIONS_DATA.filter(item => item.category === filterKey);
    }
    
    let html = '';
    filteredData.forEach(item => {
        const contactLink = item.contact && item.contact !== '-' 
            ? `<a href="https://wa.me/62${item.contact.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer">${item.contact}</a>`
            : item.contact;
            
        html += `
            <div class="dest-card" id="${item.id}">
                ${renderImageGallery(item)}
                
                <div class="dest-card-content">
                    <div>
                        <div class="dest-meta">
                            <span class="dest-num-tag">${item.number}</span>
                            <span class="dest-cat-badge">${item.categoryLabel}</span>
                        </div>
                        <h3 class="dest-title">${item.name}</h3>
                        <p class="dest-description">${item.description}</p>
                        
                        <div class="dest-info-boxes">
                            <div class="info-box">
                                <div class="info-box-label">Jam Kunjungan</div>
                                <div class="info-box-val">${item.hours}</div>
                            </div>
                            <div class="info-box">
                                <div class="info-box-label">Pengelola</div>
                                <div class="info-box-val">${item.manager}</div>
                            </div>
                            <div class="info-box">
                                <div class="info-box-label">Kontak</div>
                                <div class="info-box-val">${contactLink}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        ${item.nextName ? `
                            <div class="next-stop-bar">
                                <div>
                                    <div class="next-stop-text">DESTINASI BERIKUTNYA (${item.distance})</div>
                                    <div class="next-stop-name">${item.nextName}</div>
                                </div>
                                <button class="next-stop-btn" onclick="scrollToDestination('${item.nextId}')">
                                    LANJUTKAN &rarr;
                                </button>
                            </div>
                        ` : ''}
                        
                        <a href="${item.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-maps">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            BUKA GOOGLE MAPS
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

/* SCROLL TO DESTINATION WITH OFFSET */
function scrollToDestination(destId) {
    if (!destId) return;
    
    // Switch filter to 'all' if element is hidden
    renderDestinations('all');
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === 'all') btn.classList.add('active');
        else btn.classList.remove('active');
    });

    setTimeout(() => {
        const element = document.getElementById(destId);
        if (element) {
            const yOffset = -90; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            
            // Add subtle focus animation
            element.style.borderColor = 'var(--terracotta)';
            setTimeout(() => {
                element.style.borderColor = 'var(--border-color)';
            }, 1800);
        }
    }, 50);
}

/* CHECK URL HASH FOR DIRECT QR SCROLLING */
function checkUrlHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        scrollToDestination(hash);
    }
}

/* LIGHTBOX PHOTO MODAL */
function openPhotoModal(imageSrc, captionText) {
    let modal = document.getElementById('photoModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'photoModal';
        modal.className = 'photo-modal';
        modal.onclick = closePhotoModal;
        modal.innerHTML = `
            <div class="photo-modal-content" onclick="event.stopPropagation()">
                <button class="photo-modal-close" onclick="closePhotoModal()">&times;</button>
                <img id="photoModalImg" src="" alt="Zoom Photo">
                <div id="photoModalCaption" class="photo-modal-caption"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const imgEl = document.getElementById('photoModalImg');
    const capEl = document.getElementById('photoModalCaption');
    if (imgEl) imgEl.src = imageSrc;
    if (capEl) capEl.textContent = captionText || '';
    
    modal.classList.add('active');
}

function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.classList.remove('active');
    }
}
