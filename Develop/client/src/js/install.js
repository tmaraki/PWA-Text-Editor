const butInstall = document.getElementById('buttonInstall'); // Corrected variable name

// Logic for installing the PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.visibility = 'visible'; // Using correct variable name
  textHeader.textContent = 'Click the button to install!';

  butInstall.addEventListener('click', () => {
    deferredPrompt.prompt();
    butInstall.setAttribute('disabled', true); // Using correct variable name
    butInstall.textContent = 'Installed!';
  });
});

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
});