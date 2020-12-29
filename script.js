var dropbtn = document.getElementById('dropbtn')
var content = document.getElementById('dropdown-content')
var hidden = true;

dropbtn.addEventListener('click', function() {
    if (hidden) {
        content.style.display = 'block'
        dropbtn.style.backgroundColor = 'rgb(0, 195, 255)'
    } else {
        content.style.display = 'none'
        dropbtn.style.backgroundColor = 'aqua'
    }
    hidden = !hidden
})