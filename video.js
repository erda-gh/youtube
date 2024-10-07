function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var BtnText = document.getElementById("myBtn");

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        BtnText.innerHTML = 'more...';
        moreText.style.display = 'none'   
    } else {
        dots.style.display = 'none';
        BtnText.innerHTML = 'Show less';
        moreText.style.display = 'inline'
    }
}