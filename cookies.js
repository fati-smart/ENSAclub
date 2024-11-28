// Fonction pour vérifier si l'utilisateur a déjà accepté les cookies
function checkCookies() {
    if (document.cookie.indexOf('cookiesAccepted=true') !== -1) {
        // Si le cookie existe, on cache la barre
        document.getElementById('cookie-banner').style.display = 'none';
    } else {
        // Sinon, on affiche la barre
        document.getElementById('cookie-banner').style.display = 'block';
    }
}

// Fonction pour accepter les cookies
function acceptCookies() {
    // Créer un cookie pour indiquer que l'utilisateur a accepté
    document.cookie = "cookiesAccepted=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/"; // 1 an

    // Cacher la barre de notification après acceptation
    document.getElementById('cookie-banner').style.display = 'none';
}

// Attacher l'événement au bouton "Accepter"
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);

// Vérifier les cookies au chargement de la page
window.onload = checkCookies;
