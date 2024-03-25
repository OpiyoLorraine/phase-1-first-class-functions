function receivesAFunction(callback){
    return (callback())
}
receivesAFunction(function(){})

function returnsANamedFunction(named){
    return function name(){

    }
}

function returnsAnAnonymousFunction(callback){
    return function(){
        
    }
}