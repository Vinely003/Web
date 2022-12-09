function search() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('film');

    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "block";
        }
        else {
            x[i].style.display = "none";
        }
    }
}