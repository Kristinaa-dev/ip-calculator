let containter = document.createElement("div");
containter.setAttribute("id", "container");
document.body.appendChild(containter);



let ip_input = document.createElement("input");
ip_input.setAttribute("type", "text");
ip_input.setAttribute("placeholder", "Enter IP address:");
ip_input.setAttribute("id", "ip_input");
container.appendChild(ip_input);

let lineBreak = document.createElement("br");
container.appendChild(lineBreak);


let btn1 = document.createElement("button");
btn1.innerHTML = "Convert";
container.appendChild(btn1);
btn1.setAttribute("id", "btn1");


btn1.addEventListener("click", function () {
  let ip = ip_input.value;
  if (checkIp(ip)) {
    let bin = decToBin(ip);
    let result = document.createElement("p");
    result.setAttribute("id", "bin");
    result.innerHTML = bin;
    result.setAttribute("id", "result")
    container.appendChild(result);
  } else {
    alert("Invalid IP address");
  }
});



function checkIp(ip){
    return (ip != "");
}




function decToBin(ip){
    let bin = [];
    let dec = ip.split(".");
    for(let i = 0; i < dec.length; i++){
        bin.push(parseInt(dec[i]).toString(2));
    }
    return bin.join(".");
}