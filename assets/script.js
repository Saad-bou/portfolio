var icon = document.getElementById("icon");

icon.onclick = function() {
    var iconElement = icon.querySelector('i');

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        iconElement.classList.remove("fa-moon");
        iconElement.classList.add("fa-sun");
    } else {
        iconElement.classList.remove("fa-sun");
        iconElement.classList.add("fa-moon");
    }
}


AOS.init({
    duration :800,
})

window.onscroll = function() {
    if (document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    }else{
        document.getElementById('navbar').classList.remove('scrolled');
    }
}