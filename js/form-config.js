document.addEventListener('DOMContentLoaded', function() {
  // Store Formspree ID here to keep it out of the HTML source code
  const formspreeId = 'mwpobzya';
  
  // Find the form and update its action URL
  const contactForm = document.getElementById('email-form');
  if (contactForm) {
    const currentAction = contactForm.getAttribute('action');
    contactForm.setAttribute('action', currentAction.replace('FORMSPREE_ID_PLACEHOLDER', formspreeId));
    
    // Add event listener for form submission
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      
      // Show loading state
      const submitButton = contactForm.querySelector('input[type="submit"]');
      const originalButtonValue = submitButton.value;
      submitButton.value = submitButton.getAttribute('data-wait');
      submitButton.disabled = true;
      
      // Send form data to Formspree
      fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        // Reset button state
        submitButton.value = originalButtonValue;
        submitButton.disabled = false;
        
        // Show success message and hide form
        if (data.ok) {
          contactForm.style.display = 'none';
          document.querySelector('.form-success').style.display = 'block';
        } else {
          // Show error message
          document.querySelector('.form-error').style.display = 'block';
          setTimeout(() => {
            document.querySelector('.form-error').style.display = 'none';
          }, 5000);
        }
      })
      .catch(error => {
        // Reset button state and show error message
        submitButton.value = originalButtonValue;
        submitButton.disabled = false;
        document.querySelector('.form-error').style.display = 'block';
        setTimeout(() => {
          document.querySelector('.form-error').style.display = 'none';
        }, 5000);
      });
    });
  }
});
