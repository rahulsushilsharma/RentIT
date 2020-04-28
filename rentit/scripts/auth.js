


//AUTH STATUS

auth.onAuthStateChanged(user=>{
    console.log(user);
});


//sign up foam

const signupForm = document.querySelector('#SIGNUP-FORM');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['SignupEmail'].value;
    const pass = signupForm['SignupPassword1'].value;
    const passcheck = signupForm['SignupPassword2'].value;
    if (pass === passcheck) {
        auth.createUserWithEmailAndPassword(email, pass).then(cred => {
            console.log('userr signed up');
            $('#SIGNUP').modal('hide');
            signupForm.reset();


        });
    }
});


//LOGIN foam

const loginForm = document.querySelector('#LOGIN-FORM');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['LoginEmail'].value;
    const pass = loginForm['LoginPassword'].value;
    auth.signInWithEmailAndPassword(email, pass).then(cred => {
        console.log('user logged in');
        $('#LOGIN').modal('hide');
        loginForm.reset();
    });
});

//LOGOUT 

const logout = document.querySelector("#LOGOUT");
logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user loged out..');
    });
});