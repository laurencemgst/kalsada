
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector(".content");

toggleBtn.addEventListener("click", () => {
    if (sidebar.style.left === "0px" || sidebar.style.left === "") {
        sidebar.style.left = "-150px";
        content.style.marginLeft = "20px";
    } else {
        sidebar.style.left = "0px";
        content.style.marginLeft = "170px";
    }
});
