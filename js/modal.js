document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.cd-user-modal');
    const loginButton = document.querySelector('.cd-signin');
    const signupButton = document.querySelector('.cd-signup');
    const closeButton = document.querySelector('.cd-close-form');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.add('is-visible');
        document.getElementById('cd-login').style.display = 'block';
        document.getElementById('cd-signup').style.display = 'none';
    });

    signupButton.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.add('is-visible');
        document.getElementById('cd-signup').style.display = 'block';
        document.getElementById('cd-login').style.display = 'none';
    });

    // Close modal
    closeButton.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('is-visible');
    });

    // Close modal on outside click
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('is-visible');
        }
    });
});
