const genrevcheck = word => drow => {
  let equal = false
  if(word.length === drow.length){
    equal = true
    let i=0
    while(equal && i<drow.length ){
      equal = word[i] === drow[drow.length -1 -i]
      i++
    }
    return equal
  }
}