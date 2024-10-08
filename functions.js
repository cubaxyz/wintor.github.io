function audioPlay() {
    var audio = document.getElementById("audio");
    audio.volume = 0.05;
    audio.play();
}

function openLink(url) {
    window.open(url, '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("steam").addEventListener("click", function() {
        openLink("https://steamcommunity.com/id/acidinsomnia");
    });
    document.getElementById("youtube").addEventListener("click", function() {
        openLink("https://www.youtube.com/channel/UCzsVPDiDOKe7FSx4Qig8gmg");
    });
    document.getElementById("instagram").addEventListener("click", function() {
        openLink("https://www.instagram.com/flametrim/");
    });
    document.getElementById("github").addEventListener("click", function() {
        openLink("https://github.com/intrastellarvision");
    });
    document.getElementById("vk").addEventListener("click", function() {
        openLink("https://vk.com/spicemaaan_88");
    });

    document.getElementById("overlay-toggle").addEventListener("change", function() {
        if (this.checked) {
            audioPlay();
        }
    });
});