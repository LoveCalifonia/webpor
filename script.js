const menu =document.querySelector("menu");
const nav =document.querySelector(".links");

menu.onclick = () => {
    menu.classListt.toggle('bx-x');
    nav.classList.toggle('active');
}
function showProject(projectId) {
    let message = '';

    switch (projectId) {
        case 1:
            // Membuka halaman netflix.html di tab baru
            window.open('netflix.html');
            message = "Proyek 1 adalah Website nonton yang masih dalam tahap pengembangan.";
            break;
        case 2:
            // Membuka halaman gallery.html di tab baru
            window.open('gallery.html');
            message = "Proyek 2 adalah website yang berisikan sound motor bermerek KTM.";
            break;
        default:
            message = "Proyek tidak ditemukan.";
    }

    alert(message);
}
