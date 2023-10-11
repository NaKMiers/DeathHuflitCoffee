const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
let passwordsMatch = false;

// Check to see if passwords match
if (password1El.value === password2El.value) {
   passwordsMatch = true;
   password1El.style.borderColor = 'green';
   password2El.style.borderColor = 'green';
} else {
   passwordsMatch = false;
   password1El.style.borderColor = 'red';
   password2El.style.borderColor = 'red';
   return;
}

      // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>