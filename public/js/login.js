// Form to login with username and password
const loginForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector
    ('username_login').value.trim();

    const password = document.querySelector('password_login').value.trim();
    if(username && password) {
        const response = await fetch('/routes/login',{
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'content-type': 'application/json'},
        });
         
        if (respond.ok) {
            document.location.replace('/');
        } else {
            alert('')
        }
    }
    };

    // Form to sign Up with username and password 
    const signupForm = async (event) => {
        event.preventDefault();

        const username = document.querySelector
        ('#username-signup').value.trim();
        const password = document.querySelector
        ('#password-signup').value.trim();

        if (username && password) {
            const response = await fetch('/api/player-routes', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers : {'content-type': 'application/json'},
            });

            if(response.ok) {
                document.location.replace('/');
            }else{
                alert('');
            }
        }
    };

    // Listeners
    document.querySelector('.username-form')
    .addEventListener('submit', loginForm);

    document.querySelector('.signup-form')
    .addEventListener('submit', signupForm);