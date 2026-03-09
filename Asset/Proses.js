// Main UI Logic for Celestial Demon Beast
function loadNavbar() {
  const timestamp = new Date().getTime();
  const placeholder = document.getElementById("navbar-placeholder");
  if (!placeholder) return;

  fetch(`navbar1.html?t=${timestamp}`)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text();
    })
    .then(data => {
      placeholder.innerHTML = data;
      
      // Initialize mobile toggle
      const mobileBtn = document.getElementById('mobile-menu-btn');
      if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
          const sidebar = document.getElementById("mySidebar");
          if (sidebar) sidebar.classList.toggle("hidden");
        });
      }

      // Initialize scroll effect
      initScrollEffect();
    })
    .catch(error => console.error("Failed to load navbar:", error));
}

function initScrollEffect() {
  const navbar = document.getElementById('myNavbar');
  if (!navbar) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-black/95', 'py-1');
      navbar.classList.remove('bg-black/60', 'py-2');
    } else {
      navbar.classList.remove('bg-black/95', 'py-1');
      navbar.classList.add('bg-black/60', 'py-2');
    }
  });
}

// Global functions for legacy support if needed
window.w3_open = function() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar) sidebar.classList.toggle("hidden");
};

function myFunction1() {
  const modal = document.getElementById("myModal");
  if (modal) modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  if (modal) modal.style.display = "none";
}

// Auto-init
document.addEventListener('DOMContentLoaded', loadNavbar);
// Fallback if DOMContentLoaded already fired
if (document.readyState !== 'loading') loadNavbar();

