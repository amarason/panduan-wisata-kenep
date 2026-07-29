/* ==========================================================================
   TAPAK KENEP — Digital Thematic Travel Guide · E-Book Interactive Flip
   KKN Tim 2 IDBU 64 UNDIP 2026
   ========================================================================== */

let currentPage = 0;
let pages = [];
let totalPages = 0;
let pageTitles = [];
let isAnimating = false;

// ============================================================
// PAGE FLIP ANIMATION & NAVIGATION LOGIC
// ============================================================

/**
 * Show a specific page with realistic 3D page flip transition.
 * @param {number} targetIndex - Target page index (0-based)
 * @param {string} direction - 'next' | 'prev'
 */
function goToPage(targetIndex, direction) {
  if (targetIndex < 0 || targetIndex >= totalPages || targetIndex === currentPage || isAnimating) return;

  isAnimating = true;

  var curPageEl = pages[currentPage];
  var nextPageEl = pages[targetIndex];

  curPageEl.style.transition = 'transform 0.48s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.48s ease';
  nextPageEl.style.transition = 'transform 0.48s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.48s ease';

  if (direction === 'next') {
    curPageEl.style.transformOrigin = 'left center';
    curPageEl.style.transform = 'rotateY(-95deg)';
    curPageEl.style.opacity = '0';

    nextPageEl.style.transformOrigin = 'right center';
    nextPageEl.style.transform = 'rotateY(60deg)';
    nextPageEl.style.opacity = '0';
    nextPageEl.style.display = 'block';

    void nextPageEl.offsetWidth;
    requestAnimationFrame(function () {
      nextPageEl.style.transform = 'rotateY(0deg)';
      nextPageEl.style.opacity = '1';
    });
  } else {
    curPageEl.style.transformOrigin = 'right center';
    curPageEl.style.transform = 'rotateY(95deg)';
    curPageEl.style.opacity = '0';

    nextPageEl.style.transformOrigin = 'left center';
    nextPageEl.style.transform = 'rotateY(-60deg)';
    nextPageEl.style.opacity = '0';
    nextPageEl.style.display = 'block';

    void nextPageEl.offsetWidth;
    requestAnimationFrame(function () {
      nextPageEl.style.transform = 'rotateY(0deg)';
      nextPageEl.style.opacity = '1';
    });
  }

  setTimeout(function () {
    curPageEl.classList.remove('active');
    curPageEl.style.display = 'none';
    curPageEl.style.transform = '';
    curPageEl.style.opacity = '';
    curPageEl.style.transition = '';
    curPageEl.style.transformOrigin = '';

    nextPageEl.classList.add('active');
    nextPageEl.style.transform = '';
    nextPageEl.style.opacity = '';
    nextPageEl.style.transition = '';
    nextPageEl.style.transformOrigin = '';

    currentPage = targetIndex;
    updateNavUI();
    isAnimating = false;

    // Reset scroll to top of page on navigation
    nextPageEl.scrollTop = 0;
  }, 500);
}

/**
 * Move forward (+1) or backward (-1) by step count.
 */
function changePage(step) {
  var target = currentPage + step;
  if (target >= 0 && target < totalPages) {
    goToPage(target, step > 0 ? 'next' : 'prev');
  }
}

/**
 * Update Navigation Bar UI
 */
function updateNavUI() {
  var numEl = document.getElementById('currentPageNum');
  var titleEl = document.getElementById('page-title-display');

  if (numEl) numEl.textContent = String(currentPage + 1).padStart(2, '0');
  if (titleEl) titleEl.textContent = pageTitles[currentPage] || '';
}

// ============================================================
// CLICK TO FLIP HANDLER
// ============================================================
function handlePageClick(e) {
  // Only bypass page flip if clicking explicit action controls
  var explicitControl = e.target.closest('a, button, .photo-zoom-btn, .photo-inset-badge, .photo-modal');
  if (explicitControl) return;

  var page = e.currentTarget;
  var rect = page.getBoundingClientRect();
  var clickX = e.clientX - rect.left;

  if (clickX > rect.width * 0.5) {
    changePage(1);  // Right half -> next
  } else {
    changePage(-1); // Left half -> prev
  }
}

// ============================================================
// KEYBOARD NAVIGATION
// ============================================================
document.addEventListener('keydown', function (e) {
  if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
    case 'PageDown':
      e.preventDefault();
      changePage(1);
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
    case 'PageUp':
      e.preventDefault();
      changePage(-1);
      break;
    case 'Home':
      e.preventDefault();
      if (currentPage !== 0) goToPage(0, 'prev');
      break;
    case 'End':
      e.preventDefault();
      if (currentPage !== totalPages - 1) goToPage(totalPages - 1, 'next');
      break;
    case 'Escape':
      closePhotoModal();
      break;
  }
});

// ============================================================
// TOUCH / SWIPE NAVIGATION
// ============================================================
var touchStartX = 0;
var touchStartY = 0;

document.addEventListener('touchstart', function (e) {
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', function (e) {
  var modal = document.getElementById('photoModal');
  if (modal && modal.classList.contains('active')) return;

  var deltaX = e.changedTouches[0].clientX - touchStartX;
  var deltaY = e.changedTouches[0].clientY - touchStartY;

  if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
    if (deltaX < 0) {
      changePage(1);
    } else {
      changePage(-1);
    }
  }
}, { passive: true });

// ============================================================
// LIGHTBOX PHOTO MODAL
// ============================================================
function openPhotoModal(imageSrc, captionText) {
  var modal = document.getElementById('photoModal');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'photoModal';
    modal.className = 'photo-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closePhotoModal();
    });

    modal.innerHTML =
      '<div class="photo-modal-content">' +
      '  <button class="photo-modal-close" onclick="closePhotoModal()" aria-label="Tutup">&times;</button>' +
      '  <img id="photoModalImg" src="" alt="Foto Diperbesar">' +
      '  <div id="photoModalCaption" class="photo-modal-caption"></div>' +
      '</div>';

    document.body.appendChild(modal);
  }

  var imgEl = document.getElementById('photoModalImg');
  var capEl = document.getElementById('photoModalCaption');

  if (imgEl) imgEl.src = imageSrc;
  if (capEl) capEl.textContent = captionText || '';

  modal.classList.add('active');
}

function closePhotoModal() {
  var modal = document.getElementById('photoModal');
  if (modal) modal.classList.remove('active');
}

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  pages = Array.from(document.querySelectorAll('.book-page'));
  totalPages = pages.length;
  pageTitles = pages.map(function (p) { return p.getAttribute('data-title') || ''; });

  // Attach click-to-flip on page containers
  pages.forEach(function (p) {
    p.addEventListener('click', handlePageClick);
  });

  // URL Hash check
  var hash = window.location.hash.replace('#', '');
  var startAt = 0;
  if (hash) {
    var target = document.getElementById(hash);
    if (target) {
      var idx = pages.indexOf(target);
      if (idx >= 0) startAt = idx;
    }
  }

  // Hide all pages, show starting page
  pages.forEach(function (p) {
    p.style.display = 'none';
    p.classList.remove('active');
  });

  currentPage = startAt;
  pages[currentPage].style.display = 'block';
  pages[currentPage].classList.add('active');

  updateNavUI();
});
