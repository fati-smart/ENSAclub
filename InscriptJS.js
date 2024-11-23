document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".inscription form");
    const nomInput = document.getElementById("nom");
    const prenomInput = document.getElementById("prenom");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("password-confirm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let errors = [];

        if (nomInput.value.trim() === "") {
            errors.push("Le champ 'Nom' est obligatoire.");
        }

        if (prenomInput.value.trim() === "") {
            errors.push("Le champ 'Prénom' est obligatoire.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            errors.push("L'adresse e-mail n'est pas valide.");
        }

        if (passwordInput.value.trim() === "") {
            errors.push("Le champ 'Mot de passe' est obligatoire.");
        }

        if (passwordInput.value.trim() !== passwordConfirmInput.value.trim()) {
            errors.push("Les mots de passe ne correspondent pas.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            alert("Formulaire soumis avec succès !");
            form.submit(); 
        }
    });
});
