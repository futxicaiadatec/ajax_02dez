// run1.js
addEventListener('load', function() {
    const bt = document.getElementById("show")
    bt.onclick = e => {
        document.body.childNodes[document.body.childNodes.length -1].remove()
        const code = document.createElement("code")
        code.className = "javascript"
        const pre = document.createElement("pre")
        pre.appendChild(code)
        document.body.appendChild(pre)
        const ajax = new XMLHttpRequest()
        ajax.open("GET", "run01.js", true)
        ajax.onload = e => {
            code.innerHTML = e.target.responseText
            hljs.highlightBlock(code)
        }
        ajax.send()
    }
})