var sumRootToLeaf = function(root) {
    let stack  =[{node:root, str: ""}]
     
    let total  = 0
    while (stack.length ){
        let {node, str} = stack.shift()
        if(!node.left && !node.right){
                                     total+=Number(parseInt(str+node.val,2))
 
        }
         
            
            node.left && stack.push({node:node.left, str: str+node.val})
            
            node.right && stack.push({node:node.right, str: str+node.val})
        
    }
     return total
 };