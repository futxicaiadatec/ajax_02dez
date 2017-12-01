function perdeu(){
    alert('perdeu')
}

var id = setTimeout( perdeu, 10000 )

console.log('rápido clearTimeout(' + id + ')!!!')