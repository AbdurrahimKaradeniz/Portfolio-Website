window.onload = () => {
    console.log("Mert's Dev Log loaded!");

    let navItems = document.querySelectorAll("nav a");
    navItems.forEach(item => {
        item.onclick = evt => {
            evt.preventDefault();
            let destination = document.querySelector(item.getAttribute("href"));
            destination.scrollIntoView({ behavior: "smooth" });
        };
    });
};