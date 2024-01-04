function nmToPrefix(nm){
    let prefix = 0;
    let binNm = parseInt(nm).toString(2);
    for(let i = 0; i < binNm.length; i++){
        if(binNm[i] == "1"){
            prefix++;
        }
    }
    return 32-prefix;
}


function decToBin(ip){
    let bin = [];
    let dec = ip.split(".");
    let partBin = "";
    for(let i = 0; i < 4; i++){
        partBin = parseInt(dec[i]).toString(2);
        partBin = "0".repeat(8 - partBin.length) + partBin;
        bin.push(partBin);
    }
    return bin.join(".");

}




function binToDec(ip){
    let dec = [];
    let bin = ip.split(".");
    for(let i = 0; i < bin.length; i++){
        dec.push(parseInt(bin[i], 2));
    }
    return dec.join(".");
}




function netAddress(ip, nm){
    let net = [];
    let binIp = decToBin(ip).split(".");
    
    let binNm = "1".repeat(nm) + "0".repeat(32 - nm);
    if (binNm.length != 32){
        console.log("CHOD DO PICE");
    }
    binNm = binNm.match(/.{1,8}/g);

    for(let i = 0; i < 4; i++){
        net.push(parseInt(binIp[i], 2) & parseInt(binNm[i], 2));
    }

    return net.join(".");
}



function broadAddress(ip, nm){
    let broad = [];
    let binIp = decToBin(ip).split(".");
    let binNm = "0".repeat(nm) + "1".repeat(32 - nm);
    binNm = binNm.match(/.{1,8}/g);

    for(let i = 0; i < 4; i++){
        broad.push(parseInt(binIp[i], 2) | parseInt(binNm[i], 2));
    }
    return broad.join(".");
}




function firstHost(ip, nm){
    let first = [];
    let binIp = decToBin(ip).split(".");
    let binNm = "1".repeat(nm) + "0".repeat(32 - nm);
    binNm = binNm.match(/.{1,8}/g);

    for(let i = 0; i < 4; i++){
        first.push(parseInt(binIp[i], 2) & parseInt(binNm[i], 2));
    }
    first[3] += 1;
    return first.join(".");
}



function lastHost(ip, nm){
    let last = [];
    let binIp = decToBin(ip).split(".");
    let binNm = "0".repeat(nm) + "1".repeat(32 - nm);
    binNm = binNm.match(/.{1,8}/g);

    for(let i = 0; i < 4; i++){
        last.push(parseInt(binIp[i], 2) | parseInt(binNm[i], 2));
    }
    last[3] -= 1;
    return last.join(".");
}
              



function nHosts(nm){
    return Math.pow(2, 32 - nm)-2;
}

function checkboxCount(){
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let count = 0;
    for(let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            count++;
        }
    }
    return count;
}


function calculate(){
    let ip = document.getElementById("ip").value;
    let nm = document.getElementById("nm").value;
    if (nm.length <= 3){
        // console.log("CHOD DO PICE");
        if (nm[0] == "/"){
            nm = nm.slice(1);
            console.log(nm);
        }
        console.log(nm);
        document.getElementById("nmOrPref").innerHTML = "Prefix: <span id='netmask'></span>";
        // document.getElementById("netmask").innerHTML = nm;
        nm = parseInt(nm);
        document.getElementById("netmask").innerHTML = nm;
    } else {
        console.log(nm);
        nm = nmToPrefix(nm);
        console.log(nm);
        document.getElementById("netmask").innerHTML = nm;
    }


    document.getElementById("ipAddress").innerHTML = ip;



    if (document.getElementById("na").checked){
        document.getElementById("network").innerHTML = netAddress(ip, nm);
        let elements = document.getElementsByClassName("network");
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "block";
        }
    }
    else{
        let elements = document.getElementsByClassName("network");
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "none";
        }
    }
    if (document.getElementById("bca").checked){
        document.getElementById("broadcast").innerHTML = broadAddress(ip, nm);
        let elements = document.getElementsByClassName("broadcast");
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "block";
        }
    }
    else{
        let elements = document.getElementsByClassName("broadcast");
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "none";
        }
    }
    if (document.getElementById("fha").checked){
        document.getElementById("firstHost").innerHTML = firstHost(ip, nm);
        let elements = document.getElementsByClassName("firstHost");
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "block";
        }
    }
    else{
        let elements = document.getElementsByClassName("firstHost");
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "none";
        }
    }
    if (document.getElementById("lha").checked){
        document.getElementById("lastHost").innerHTML = lastHost(ip, nm);
        let elements = document.getElementsByClassName("lastHost");
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "block";
        }
    }
    else{
        let elements = document.getElementsByClassName("lastHost");
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "none";
        }
    }
    if (document.getElementById("nha").checked){
        document.getElementById("nHosts").innerHTML = nHosts(nm);
        let elements = document.getElementsByClassName("nHosts");
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "block";
        }
    }
    else{
        let elements = document.getElementsByClassName("nHosts");
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "none";
        }
    }
    let resultModal = document.getElementById("resultModal");
    resultModal.style.display = "block";

}
let closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
    let resultModal = document.getElementById('resultModal');
    resultModal.style.display = 'none';
});

window.onclick = function(event) {
    let resultModal = document.getElementById('resultModal');
    if (event.target == resultModal) {
        resultModal.style.display = 'none';
    }
}