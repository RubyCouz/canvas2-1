var c = document.getElementById("glace");
var ctx = c.getContext("2d");

//cone

ctx.beginPath(); // début de chemin
ctx.moveTo(200,375) //le tracé part du point 200,50
ctx.lineTo(125,175) //un segment est ajouté vers 100.150
ctx.lineTo(275,175) //un segment est ajouté vers 300.150
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#AA6522"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé

ctx.beginPath();
ctx.moveTo(125,175);
ctx.quadraticCurveTo(200,25,275,175)
ctx.fillStyle = "#8A0908";
ctx.fill();
