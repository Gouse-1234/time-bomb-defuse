let time = 30
let key = setInterval(function count() {
    time -= 1
    document.getElementById("head").textContent = time
    if (time == 10) {
        clearInterval(key)
    }

}, 1000)

function defuse() {
    let userkey = document.getElementById("defusekey").value
    if (userkey == "12345678") {
        clearInterval(key)
        document.getElementById("head").textContent = "bombe defuse"
    }
}