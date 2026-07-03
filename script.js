
// ===== Controle da tela de introdução =====
const btn = document.getElementById("enterBtn");
const overlay = document.getElementById("introOverlay");
const site = document.getElementById("siteContent");

if (btn && overlay && site) {
  btn.addEventListener("click", () => {
    // esconder overlay e revelar site
    overlay.classList.add("hidden");
    site.classList.add("visible");

    // remover overlay do DOM após animação
    setTimeout(() => {
      try { overlay.remove(); } catch (e) { /* ignore */ }
    }, 700);
  });
} else {
  // debug útil caso algo não esteja referenciado corretamente
  console.warn("Intro overlay: elemento(s) não encontrado(s)", { btn, overlay, site });
}

// ===== Rolagem suave personalizada =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60, // pra não ficar escondido atrás do menu
        behavior: 'smooth'
      });
    }
  });
});

const elements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
