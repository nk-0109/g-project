window.addEventListener("DOMContentLoaded", function () {
    const fullName = sessionStorage.getItem("fullName");
    const selectedAvatar = sessionStorage.getItem("selectedAvatar");

    const nameFinal = document.getElementById("name");
    const imgFinal = document.getElementById("profileImage");
    const degree = this.document.getElementById("degree");

    if (nameFinal && imgFinal && fullName && selectedAvatar) {
        //nameFinal.textContent = "CONGRATULATIONS" + fullName;
        

        if (selectedAvatar === "person1") {
            nameFinal.textContent = "Miss " + fullName;
            imgFinal.src = "girlgrad.png";
            degree.textContent = " In your Bachelors of History";
        } else if (selectedAvatar === "person2") {
            nameFinal.textContent = "Mr " + fullName;
            imgFinal.src = "boygrad.png";
            degree.textContent = "In your Masters of Pharmacy"
        } else {
            imgFinal.src = selectedAvatar.src;
        }
    } else {
        document.getElementById("name").textContent = "Unavailable";
    }


    // CONFETTI
    confetti({
        particleCount: 1000,
        angle: 90,
        spread: 200,
        origin: { x: 0.5, y: 1 },
        gravity: 0.3,
        ticks: 500
    });
});