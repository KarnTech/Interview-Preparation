 */
var deepestLeavesSum = function(root) {
    
  let level  = 1
  let stack = [{node: root.val, level: level}]
  let tree = [{node:root, level: level}]
  
    while(tree.length){
        let popped = tree.shift()
        if(popped.node.left){
            tree.push({node:popped.node.left, level: popped.level+1})
            stack.push({node: popped.node.left.val, level:popped.level+1})
        }
        
        if(popped.node.right){
            tree.push({node:popped.node.right, level: popped.level+1})
            stack.push({node: popped.node.right.val, level: popped.level+1})

        }
    }
  
    
    let total  = 0
    let maxlevel  = 0
    for(let node in stack){
        if(stack[node].level >maxlevel){
            maxlevel = stack[node].level
        }
    }
    for(let node in stack){
        if(stack[node].level ==maxlevel){
            total +=  stack[node].node
        }
    }
    
    return total
};

