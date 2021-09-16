const pages = document.querySelectorAll('.biog');
function changePage(n) {
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    pages[n].style.display = 'block';
}