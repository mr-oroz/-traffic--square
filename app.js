let inner = document.getElementsByClassName('inner')[0]
let x = 0;
let y = 0
document.body.onkeydown = (e) => {
    console.log(e)
    if (e.key === 'ArrowRight') {
        x += 10;
        inner.style.left = x + 'px'
    } else if (e.key === 'ArrowLeft') {
        x -= 10;
        inner.style.left = x + 'px'
    } else if (e.key === 'ArrowDown') {
        y += 10;
        inner.style.top = y + 'px'
    } else if (e.key === 'ArrowUp') {
        y -= 10;
        inner.style.top = y + 'px'
    }
}


