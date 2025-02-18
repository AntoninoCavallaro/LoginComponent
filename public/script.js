const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(response => response.json())
        .then(data => {
            // Disabilita lo scroll mentre viene visualizzato il popup
            document.body.style.overflow = 'hidden';

            if (data.success) {
                // Messaggio di successo in verde
                Swal.fire({
                    title: 'Successo!',
                    text: data.message,
                    icon: 'success',
                    confirmButtonColor: '#28a745',
                    allowOutsideClick: false, 
                    backdrop: true, 
                    didClose: () => {
                        document.body.style.overflow = 'auto'; 
                    }
                });

            } else {
                // Messaggio di errore in rosso
                Swal.fire({
                    title: 'Errore!',
                    text: data.message,
                    icon: 'error',
                    confirmButtonColor: '#dc3545',
                    didClose: () => {
                        document.body.style.overflow = 'auto'; 
                    }
                });
            }
        })
        .catch(error => {
            // Gestisci errori di rete o server
            Swal.fire({
                title: 'Errore!',
                text: 'Errore interno del server.',
                icon: 'error',
                confirmButtonColor: '#dc3545',
                didClose: () => {
                    document.body.style.overflow = 'auto'; 
                }
            });
        });
});
