/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let noincoming  =  new Set(Array.from({length:n}, (v,i) => i ));
    
    
    for (let  [from, to] of edges){
        noincoming.delete(to)
    }
    return [...noincoming]
    
};