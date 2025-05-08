document.addEventListener('DOMContentLoaded', function() {
  // In production, this would load from environment variables
  // For now, we'll use this approach for simplicity
  const formspreeId = 'mwpobzya'; // Store your ID securely in production
  
  // Find the form and update its action URL
  const contactForm = document.getElementById('email-form');
  if (contactForm) {
    const currentAction = contactForm.getAttribute('action');
    contactForm.setAttribute('action', currentAction.replace('FORMSPREE_ID_PLACEHOLDER', formspreeId));
  }
});
