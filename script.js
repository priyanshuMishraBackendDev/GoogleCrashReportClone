function validateForm(event) {
    event.preventDefault();
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const country = document.getElementById('country').value;
    const email = document.getElementById('email').value;
    const companyName = document.getElementById('companyName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
  
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Form is valid, you can proceed with further actions or submit the form
    alert('Form submitted successfully!');
  }
  
  function authenticate() {
    gapi.auth2.getAuthInstance().signIn().then(function() {
      // Handle successful authentication
      console.log('User is signed in.');
    }, function(error) {
      // Handle authentication error
      console.error('Error authenticating user:', error);
    });
}
   // Replace 'YOUR_CLIENT_ID' with your Google API client ID
    const CLIENT_ID = '733063959891-555cnmp16u19ggjdogmnld96dekc398j.apps.googleusercontent.com';

    document.getElementById('loginButton').addEventListener('click', () => {
        const redirectUri = window.location.origin;
        const scope = 'https://www.googleapis.com/auth/drive.readonly';

        const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;

        window.location.href = authUrl;
    });
