// BOM - Browser Object Model

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(screen.width);
console.log(screen.height);

console.log(window.location);
function redirect(url){
    window.location.href= "https://www.google.es/";
}

function ventananueva(url){
    // window.open(url);
    window.open(url, "", "width=400px", "height=300px");
}