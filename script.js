function submitForm(event) {
  event.preventDefault();

  // Get form values
  const formData = getFormData();
}

// function authenticate() {
//   // Get form values
//   const formData = getFormData();

//   if (formData) {
//     gapi.auth2.getAuthInstance().signIn().then(function (googleUser) {
//       // Get the Google authentication token
//       const googleToken = googleUser.getAuthResponse().id_token;

//       // Include the Google token in the form data
//       formData.googleToken = googleToken;

//       // Send a POST request to your server
//       fetch('https://your-api-endpoint.com/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => {
//           // Handle the response from the server, if needed
//           alert('Form submitted successfully!');

//           // Redirect to the next page (replace 'nextPage.html' with the actual page)
//           window.location.href = 'nextPage.html';
//         })
//         .catch(error => {
//           console.error('There was a problem with the fetch operation:', error);
//           alert('An error occurred while submitting the form. Please try again later.');
//         });
//     }, function (error) {
//       // Handle authentication error
//       console.error('Error authenticating user:', error);
//     });
//   }
// }

function getFormData() {
  // Get form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const jobTitle = document.getElementById('jobTitle').value;
  const country = document.getElementById('country').value;
  const email = document.getElementById('email').value;
  const subscribe = document.getElementById('subscribe').value;
  const companyName = document.getElementById('companyName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  // Validate required fields
  if (!firstName || !lastName || !jobTitle || !country || !email || !companyName) {
    alert('Please fill in all required fields.');
    return null;
  }

  // Simple email validation
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return null;
  }

  return {
    firstName,
    lastName,
    jobTitle,
    country,
    email,
    subscribe,
    companyName,
    phoneNumber,
  };
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Replace 'YOUR_CLIENT_ID' with your Google API client ID
const CLIENT_ID = '733063959891-555cnmp16u19ggjdogmnld96dekc398j.apps.googleusercontent.com';

document.getElementById('loginButton').addEventListener('click', () => {
  const redirectUri = window.location.origin;
  const scope = 'https://www.googleapis.com/auth/drive.readonly';

  const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;

  window.location.href = authUrl;
});
