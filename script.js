function converter (num) {
    var dec = parseInt(num)
    var bin = dec.toString(2)
    document.getElementById('res').innerText=bin
}