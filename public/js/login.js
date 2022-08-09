
// const uuid = require("../../helpers/uuid");

// Login with username and password

const loginForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        const response = await fetch('/api/players/login',{
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'content-type': 'application/json'},
        // user_id: uuid()
        });
         
        if (response.ok) {
            document.location.replace('/game');
        } else {
            alert(response.statusText);
        }
    }
    };
    


    // Create Account with username and password 
    const signupForm = async (event) => {
        event.preventDefault();

        const username = document.querySelector
        ('#username-signup').value.trim();
        const password = document.querySelector
        ('#password-signup').value.trim();

        if (username && password) {
            const response = await fetch('/api/players', {

                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers : {'Content-Type': 'application/json'},
            });

            if(response.ok) {
                document.location.replace('/');
            }else{
                alert('');
            }
        }
    };

    document.querySelector('.login-form')
    .addEventListener('submit', loginForm);

    document.querySelector('.signup-form')
    .addEventListener('submit', signupForm);