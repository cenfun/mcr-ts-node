
type Point = {
    x: number;
    y: number
}

const fun = function(p:Point) {
    if(p) {
        return p;
    }
    
    return null;
}

const p:Point = {
    x:1,
    y:2
}

console.log(p);