document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  const navLinks = document.querySelectorAll('#navigation a');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      navigation.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (navigation.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navigation.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // 2. Envio de Formulário de Contato direto para o WhatsApp
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita o recarregamento da página

      // Coleta de dados digitados pelo cliente
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const subject = document.getElementById('form-subject').value;
      const message = document.getElementById('form-message').value;

      const numeroWhats = "5537988254303"; 

      // Monta o texto que será enviado
      const textoMensagem = `Olá! Meu nome é *${name}* (${email}).%0A%0A` +
                            `*Gostaria de solicitar um orçamento:*%0A` +
                            `*Assunto:* ${subject}%0A` +
                            `*Detalhes:* ${message}`;

      // Abre a janela do WhatsApp com a mensagem formatada
      window.open(`https://wa.me/${numeroWhats}?text=${textoMensagem}`, '_blank');
      
      // Limpa os campos do formulário
      contactForm.reset();
    });
  }
});