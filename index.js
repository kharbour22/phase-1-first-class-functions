
function receivesAFunction(callback) {
    
    callback();
}


function returnsANamedFunction() {
    function aX() {   
    }
    
    return aX;
}

function returnsAnAnonymousFunction() {
    
    return function () {
        
    }
}