document.addEventListener('DOMContentLoaded', function() {
  // Store Formspree ID here to keep it out of the HTML source code
  // This helps avoid GitHub security warnings
  const formspreeId = 'mwpobzya';
  
  // Find the form and update its action URL
  const contactForm = document.getElementById('email-form');
  if (contactForm) {
    const currentAction = contactForm.getAttribute('action');
    if (currentAction.includes('FORMSPREE_ID_PLACEHOLDER')) {
      contactForm.setAttribute('action', currentAction.replace('FORMSPREE_ID_PLACEHOLDER', formspreeId));
      console.log('Formspree ID successfully applied to form');
    }
  }
});
