
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const last_name = document.querySelector('#last_name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && last_name && email && password) {
  
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, last_name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
       console.log(response)
          document.location.replace('/profile');

      } else {
        alert(response.statusText);
        console.log(response.statusText)
      }
    }
  };

  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  
