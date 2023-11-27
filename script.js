// function submitForm(event) {
//   event.preventDefault();

//   // Get form values
//   const formData = getFormData();
// }



// function getFormData() {
//   // Get form values
//   const firstName = document.getElementById('firstName').value;
//   const lastName = document.getElementById('lastName').value;
//   const jobTitle = document.getElementById('jobTitle').value;
//   const country = document.getElementById('country').value;
//   const email = document.getElementById('email').value;
//   const subscribe = document.getElementById('subscribe').value;
//   const companyName = document.getElementById('companyName').value;
//   const phoneNumber = document.getElementById('phoneNumber').value;

//   // Validate required fields
//   if (!firstName || !lastName || !jobTitle || !country || !email || !companyName) {
//     alert('Please fill in all required fields.');
//     return null;
//   }

//   // Simple email validation
//   if (!validateEmail(email)) {
//     alert('Please enter a valid email address.');
//     return null;
//   }

//   return {
//     firstName,
//     lastName,
//     jobTitle,
//     country,
//     email,
//     subscribe,
//     companyName,
//     phoneNumber,
//   };
// }

// function validateEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// // Replace 'YOUR_CLIENT_ID' with your Google API client ID
// const CLIENT_ID = '733063959891-555cnmp16u19ggjdogmnld96dekc398j.apps.googleusercontent.com';

// document.getElementById('loginButton').addEventListener('click', () => {
//   const redirectUri = window.location.origin;
//   const scope = 'https://www.googleapis.com/auth/drive.readonly';

//   const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;

//   window.location.href = authUrl;
// });



const CLIENT_ID = '733063959891-555cnmp16u19ggjdogmnld96dekc398j.apps.googleusercontent.com';

  // document.getElementById('loginButton').addEventListener('click', () => {
  //   const redirectUri = window.location.origin;
  //   const scope = 'https://www.googleapis.com/auth/drive.readonly';

  //   const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;
  //   console.log(authUrl)
  //   window.location.href = authUrl;
  // });


function submitForm(event) {
  console.log(event)
  event.preventDefault();

  // Get form values
  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    jobTitle: document.getElementById('jobTitle').value,
    country: document.getElementById('country').value,
    email: document.getElementById('email').value,
    companyName: document.getElementById('companyName').value,
    subscribe : document.getElementById('subscribe').value,
    phoneNumber: document.getElementById('phoneNumber').value,
  };

  // Get access token from URL fragment
  const accessToken = getAccessTokenFromUrl();

  if (accessToken) {
    // Include the access token in the form data
    formData.accessToken = accessToken;
  console.log(formData)
    // Send a POST request to your server
    fetch('https://your-api-endpoint.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        window.location.href = `${window.location.origin}/report.html`

        // Handle the response from the server, if needed
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred while submitting the form. Please try again later.');
      });
  } 

   else {
    // If access token not found, initiate Google login
    const redirectUri = window.location.origin;
    const scope = 'https://www.googleapis.com/auth/drive.readonly';

    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;

    // Redirect to Google login
    window.location.href = authUrl;
  }
  
}

function getAccessTokenFromUrl() {
  const accessTokenMatch = window.location.href.match(/#access_token=([^&]*)/);
  return accessTokenMatch ? accessTokenMatch[1] : null;
}

