// Code your solution here
function findMatching(array, string) {
    const result = array.filter(item => item.toUpperCase() === string.toUpperCase())
    return result
}

function fuzzyMatch(arr, str){
    return arr.filter( item => item.startsWith(str))   
}

function matchName(arr, str) {
    return arr.filter( item => item.name === str)
}