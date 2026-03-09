// Function to load navbar content from an external file
export function loadNavbar() {
  const timestamp = new Date().getTime();
  const placeholder = document.getElementById("navbar-placeholder");
  if (!placeholder) return;

  fetch(`navbar1.html?t=${timestamp}`)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text();
    })
    .then(data => {
      // Inject HTML
      placeholder.innerHTML = data;
      
      // Initialize mobile toggle
      const mobileBtn = document.getElementById('mobile-menu-btn');
      if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleSidebar);
      }

      // Initialize scroll effect
      initScrollEffect();
    })
    .catch(error => console.error("Failed to load navbar:", error));
}

function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar) {
    sidebar.classList.toggle("hidden");
  }
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

// Auto-run on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
  loadNavbar();
}