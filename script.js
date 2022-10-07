function converterbin (num) {
    var dec = parseInt(num)
    var bin = dec.toString(2)
    document.getElementById('res').innerText=bin
}

function converterhex (num) {
    var dec = parseInt(num)
    var hex = dec.toString(16)
    document.getElementById('res2').innerText=hex
}