/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let i  = 0
    
    for(let r in grid){
        for(let c in grid[r]){
            if(grid[r][c] === '1'){
                i++
                helper(parseInt(r), parseInt(c), grid)
            }
            
        }
    }
    
    
    return i 
    
    
    
    
};

const helper  = (r,c, grid) => {
 
    
    if(grid[r] === undefined || grid[r][c] === '0'  || grid[r][c]=== undefined){return}
    grid[r][c] ='0';
    
    helper(r+1,c, grid)
    helper(r-1,c, grid)
    helper(r,c+1, grid)
    helper(r,c-1, grid)

    
}