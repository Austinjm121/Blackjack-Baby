// Form to login with username and password
const loginForm = async (event) => {
    event.preventDefault();

    const Username = document.querySelector
    ('#username-login').value.trim();

    const Password = document.querySelector('#password-login').value.trim();
    if(Username && Password) {
        const response = await fetch('/login',{
        method: 'POST',
        body: JSON.stringify({ Username, Password }),
        headers: { 'content-type': 'application/json'},
        });
         
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('')
        }
    }
    };

    // Form to sign Up with username and password 
    const signupForm = async (event) => {
        event.preventDefault();

        const Username = document.querySelector
        ('#username-signup').value.trim();
        const Password = document.querySelector
        ('#password-signup').value.trim();

        if (username && password) {
            const response = await fetch('/api/player-routes', {

                method: 'POST',
                body: JSON.stringify({ Username, Password }),
                headers : {'content-type': 'application/json'},
            });

            if(response.ok) {
                document.location.replace('/');
            }else{
                alert('');
            }
        }
    };

    document.querySelector('.username-form')
    .addEventListener('submit', loginForm);

    document.querySelector('.signup-form')
    .addEventListener('submit', signupForm);