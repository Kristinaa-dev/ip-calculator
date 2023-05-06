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
console.log(decToBin("192.168.1.1"));



function binToDec(ip){
    let dec = [];
    let bin = ip.split(".");
    for(let i = 0; i < bin.length; i++){
        dec.push(parseInt(bin[i], 2));
    }
    return dec.join(".");
}
console.log(binToDec("11000000.10101000.00000001.00000001"));



function netAddress(ip, nm){
    let net = [];
    let binIp = decToBin(ip).split(".");
    let binNm = "1".repeat(nm) + "0".repeat(32 - nm);
    binNm = binNm.match(/.{1,8}/g);

    for(let i = 0; i < 4; i++){
        net.push(parseInt(binIp[i], 2) & parseInt(binNm[i], 2));
    }

    return net.join(".");
}
console.log(netAddress("192.168.2.10", "8"));



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
console.log(broadAddress("192.168.2.10", "8"));



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
console.log(firstHost("192.168.2.10", "8"));



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
console.log(lastHost("192.168.2.10", "8"));
