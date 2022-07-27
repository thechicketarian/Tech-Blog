
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const last_name = document.querySelector('#last_name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const userRole = document.getElementsByName("userrole")
  
    if (name && last_name && email && password && userRole) {
      let role = ''
      for(var i = 0; i < userRole.length; i++){
        if(userRole[i].checked){
          role = userRole[i].value;
        }
      }
      const user_role = role
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, last_name, email, password, user_role }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        var userData = await response.json()
        if(userData.user_role === 'freelance' ){
          document.location.replace('/profile');
        } else {
          document.location.replace('/profile');
        }
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  