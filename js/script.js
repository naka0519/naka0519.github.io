// js/script.js
document.addEventListener("DOMContentLoaded", function () {
    function showSection(id) {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    window.addEventListener("hashchange", function () {
        const hash = window.location.hash.substring(1);
        showSection(hash);
    });

    // 初期表示
    const initialHash = window.location.hash.substring(1) || "about";
    showSection(initialHash);
});
