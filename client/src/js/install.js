const butInstall = document.getElementById('buttonInstall'); // Corrected variable name

// Logic for installing the PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('hit')
  console.log("event" + event)
  event.preventDefault();

  // store triggered event
  window.deferredPrompt = event;
  
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  // console.log(promptEvent)
  if (!promptEvent) {
      return;
  }
  // Show prompt
  promptEvent.prompt();
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event)
  window.deferredPrompt = null;
});