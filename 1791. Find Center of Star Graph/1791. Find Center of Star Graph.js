/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    if(edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) return edges[0][0]
     else return edges[0][1]
 };



/**
 * @param {number[][]} edges
 * @return {number}
 */
/*
var findCenter = function(edges) {
    const [a,b] = edges[0];
    if (edges[1].includes(a)) return a;
    
    return b;
};
*/