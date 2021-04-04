var balanceBST = function(root) {
    let visited  = []
    
    function traverse(node){
        if(!node){
            return null
        }
        node.left && traverse(node.left)
        visited.push(node.val)
        node.right & traverse(node.right)
        
    }
    
    
    traverse(root)
    
    function buildtree(tree){
        if(tree.length ==0)return null
        let middle = Math.floor((tree.length-1)/2)
        let newroot  =  new TreeNode(tree[middle])
        let left  =  tree.slice(0, middle)
        newroot.left  = buildtree(left)
        let right  = tree.slice(middle+1)
        newroot.right  = buildtree(right)
        return newroot
    }
    
    return buildtree(visited)
    
};