function acceptCookies() {
    // Cacher le popup des cookies
    const cookiePopup = document.getElementById("cookie-popup");
    cookiePopup.style.display = "none";

    // Stocker dans un cookie ou localStorage pour éviter de le montrer à nouveau
    localStorage.setItem("cookiesAccepted", "true");
}

// Vérifier si l'utilisateur a déjà accepté les cookies

document.addEventListener("DOMContentLoaded", () => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted === "true") {
        document.getElementById("cookie-popup").style.display = "none";
    }
});
