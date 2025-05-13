// Detección de AdBlock y creación del mensaje
window.addEventListener('load', () => {
  // Crear bait
  const bait = document.createElement('div');
  bait.className = 'adsbox';
  bait.style.position = 'absolute';
  bait.style.left = '-9999px';
  document.body.appendChild(bait);

  // Esperar y verificar si fue bloqueado
  setTimeout(() => {
    const adBlocked = getComputedStyle(bait).display === 'none' || bait.offsetParent === null;
    document.body.removeChild(bait);
    
    if (adBlocked) {
      // Crear overlay
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      overlay.style.zIndex = '9999';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';

      // Crear contenido
      const popup = document.createElement('div');
      popup.style.backgroundColor = 'white';
      popup.style.padding = '30px';
      popup.style.borderRadius = '10px';
      popup.style.textAlign = 'center';
      popup.style.maxWidth = '500px';
      popup.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';

      // Icono Ads con círculo punteado
      const icon = document.createElement('div');
      icon.textContent = 'Ads';
      icon.style.color = 'red';
      icon.style.fontSize = '28px';
      icon.style.border = '3px dotted red';
      icon.style.display = 'inline-block';
      icon.style.padding = '15px';
      icon.style.borderRadius = '50%';
      icon.style.marginBottom = '10px';
      icon.style.position = 'relative';

      const exclam = document.createElement('span');
      exclam.textContent = '!';
      exclam.style.position = 'absolute';
      exclam.style.top = '0';
      exclam.style.right = '0';
      exclam.style.color = 'white';
      exclam.style.background = 'red';
      exclam.style.borderRadius = '50%';
      exclam.style.padding = '2px 5px';
      exclam.style.fontSize = '14px';
      icon.appendChild(exclam);

      const title = document.createElement('h2');
      title.textContent = 'Adblock Detectado';

      const message = document.createElement('p');
      message.textContent = 'Parece que estás utilizando un bloqueador de anuncios. Por favor, considera desactivarlo para poder disfrutar el fútbol. ¡Gracias!';

      const footer = document.createElement('div');
      footer.textContent = 'Apreciamos su comprensión, refrescar.';
      footer.style.backgroundColor = 'red';
      footer.style.color = 'white';
      footer.style.padding = '10px';
      footer.style.marginTop = '20px';
      footer.style.borderRadius = '0 0 10px 10px';

      // Ensamblar
      popup.appendChild(icon);
      popup.appendChild(title);
      popup.appendChild(message);
      popup.appendChild(footer);
      overlay.appendChild(popup);
      document.body.appendChild(overlay);
    }
  }, 100);
});
