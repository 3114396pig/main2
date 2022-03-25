let myImage = document.querySelector('img');
let mypas = document.querySelector('.qqq');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/doge.png') {
      myImage.setAttribute('src', 'images/doge2.png');
    } else {
      myImage.setAttribute('src', 'images/doge.png');
    }
}
