var isCousins = function(root, x, y) {
    let level  = 1
    let tree  = [{node:root, level: level}]
    let stack  = [{parent:null, node: root.val, level:level}]
    
    while(tree.length){
        let popped   = tree.shift()
        if(popped.node.left){
            tree.push({node: popped.node.left, level: popped.level+1})
            stack.push({ parent: popped.node.val, node: popped.node.left.val, level: popped.level+1})
            
        }
        
        if(popped.node.right){
            tree.push({node: popped.node.right, level: popped.level+1})
            stack.push({ parent: popped.node.val, node: popped.node.right.val, level: popped.level+1})
            
        }
    }
    let xinfo = []
    let yinfo = []
    for(let node in stack){
        if(stack[node].node ==x){
            xinfo.push({parent: stack[node].parent, level: stack[node].level})
        }
        
        if(stack[node].node == y){
            yinfo.push({parent: stack[node].parent, level: stack[node].level})
        }
    }
     if(xinfo[0].level == yinfo[0].level && xinfo[0].parent !== yinfo[0].parent){
         return true
     }else {return false}
};