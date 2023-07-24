var nombres
console.log(nombres);

nombres = new Array(5);
console.log(nombres);

nombres = ["Daniel ", "Jose ", "Carmelo ", "Sergio ", "Miguel "];
document.write(nombres + "<br/>");

for (let i=0; i<nombres.length; i++){
    document.write(i+" " + nombres[i]+"<br/>");
}

