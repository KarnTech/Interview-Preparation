var findJudge = function(N, trust) {
    let trustcount  = new Array(N+1).fill(0)
    
    for(let[i,j] of trust){
        trustcount[i] -= 1;
        trustcount[j] += 1;
    }
    
    
    for (let i=1; i<trustcount.length; i++){
        
        if(trustcount[i] ===N-1){
            return i
        }
    }
    return -1

};