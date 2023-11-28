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


// const CLIENT_ID = '733063959891-555cnmp16u19ggjdogmnld96dekc398j.apps.googleusercontent.com';
// const API_ENDPOINT = 'https://your-api-endpoint.com/signup';

// function submitForm(event) {
//   event.preventDefault();

//   // Validate form data
//   if (!validateForm()) {
//     return;
//   }

//   // Get form values
//   const formData = {
//     firstName: document.getElementById('firstName').value,
//     lastName: document.getElementById('lastName').value,
//     jobTitle: document.getElementById('jobTitle').value,
//     country: document.getElementById('country').value,
//     email: document.getElementById('email').value,
//     companyName: document.getElementById('companyName').value,
//     phoneNumber: document.getElementById('phoneNumber').value,
//   };

//   // Open Google login popup
//   gapi.auth2.getAuthInstance().signIn().then(function () {
//     // Handle successful authentication
//     const accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;

//     // Check if access token is available
//     if (accessToken) {
//       // Include the access token in the form data
//       formData.accessToken = accessToken;

//       // Send a POST request to your API
//       fetch(API_ENDPOINT, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Handle the response from the server, if needed
//         alert('Form submitted successfully!');
//         // Redirect to the next page if desired
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//         alert('An error occurred while submitting the form. Please try again later.');
//       });
//     }
//   }, function (error) {
//     // Handle authentication error
//     console.error('Error authenticating user:', error);
//     alert('An error occurred during authentication. Please try again.');
//   });
// }

// function validateForm() {
//   // Add your validation logic here
//   // Return true if the form is valid, false otherwise
//   return true;
// }

// // Load Google API client
// gapi.load('auth2', function () {
//   gapi.auth2.init({
//     client_id: CLIENT_ID,
//   });
// });




const CLIENT_ID = '733063959891-555cnmp16u19ggjdogmnld96dekc398j.apps.googleusercontent.com';

//   document.getElementById('loginButton').addEventListener('click', submitForm(),() => {
//     const redirectUri = window.location.origin;
//     const scope = 'https://www.googleapis.com/auth/drive';

//     const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;
//     console.log(authUrl)
//     window.location.href = authUrl;
//   });

// document.getElementById('loginButton').addEventListener('click',async () =>{
//  const formData = {
//     firstName: document.getElementById('firstName').value,
//     lastName: document.getElementById('lastName').value,
//     jobTitle: document.getElementById('jobTitle').value,
//     country: document.getElementById('country').value,
//     email: document.getElementById('email').value,
//     companyName: document.getElementById('companyName').value,
//     subscribe : document.getElementById('subscribe').value,
//     phoneNumber: document.getElementById('phoneNumber').value,
//   };
//   const data = await fetch('https://google-crash-report-backend.onrender.com/user/signUp', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//   console.log(data)
// })
function submitForm() {
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
  localStorage.setItem('formData', formData);
  const redirectUri = window.location.origin;
  const scope = 'https://www.googleapis.com/auth/drive'
 const CLIENT_ID = '733063959891-555cnmp16u19ggjdogmnld96dekc398j.apps.googleusercontent.com';
  const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;
 window.location.href = authUrl
            // Make an API request to get the access token
            // Replace this with your actual API endpoint and logic
            // Note: In a real scenario, you'd want to use HTTPS for security.
            // fetch('https://your-api-endpoint.com/token', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         username: username,
            //         password: password,
            //     }),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     // Save the access token to local storage
            //     localStorage.setItem('access_token', data.access_token);

            //     // Redirect to another page
            //     window.location.href = 'another-page.html';
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     // Handle error as needed
            // });
        }
const intervalId = setInterval(getAccessTokenFromUrl, 1000);


// function submitForm() {

//   // Get form values
//   const formData = {
//     firstName: document.getElementById('firstName').value,
//     lastName: document.getElementById('lastName').value,
//     jobTitle: document.getElementById('jobTitle').value,
//     country: document.getElementById('country').value,
//     email: document.getElementById('email').value,
//     companyName: document.getElementById('companyName').value,
//     subscribe : document.getElementById('subscribe').value,
//     phoneNumber: document.getElementById('phoneNumber').value,
//   };

//   // Get access token from URL fragment
//   const accessToken = getAccessTokenFromUrl();

//   if (accessToken) {
//     // Include the access token in the form data
//     formData.accessToken = accessToken;
//   console.log(formData)
//     // Send a POST request to your server
//     fetch('https://google-crash-report-backend.onrender.com/user/signUp', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => {
        
//        console.log(response)
//       })
//       .then(data => {
//         window.location.href = `${window.location.origin}/report.html`

//         // Handle the response from the server, if needed
//         alert('Form submitted successfully!');
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//         alert('An error occurred while submitting the form. Please try again later.');
//       });
//   } 

  //  else {
  //   // If access token not found, initiate Google login
  //   const redirectUri = window.location.origin;
  //   const scope = 'https://www.googleapis.com/auth/drive.readonly';

  //   const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;

  //   // Redirect to Google login
  //   window.location.href = authUrl;
  // }
  
// }

function getAccessTokenFromUrl() {
  const urlFragment = new URLSearchParams(window.location.hash.slice(1));
  const accessToken = urlFragment.get('access_token');
  if (accessToken){
   const formData = localStorage.getItem('formData');
   formData.googleToken = accessToken 
   fetch('https://your-api-endpoint.com/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            }).then((result)=>{
          console.log(result)
            })
  }
}

