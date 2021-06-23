function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

 
let button = document.getElementById('button');
button.addEventListener('click',function (){
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let func = RGBToHex("rgb(" + x + "," + y + "," + z + ")");
  document.getElementById('body').style.background = "rgb(" + x + "," + y + "," + z + ")";
  document.getElementById('hexaDecimal').innerHTML = "HEX COLOR : " + func;
  document.getElementById('button').style.background = "rgb(" + x + "," + y + "," + z + ")"; 
})




