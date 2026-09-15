console.log("synchronus task");

const f1 = () => { 
    console.log("f1"); 
};

const f2 = () => { 
    console.log("f2"); 
};

function main() { 
    console.log("this is event loop"); 
    
    setTimeout(f1, 1000); 
    setTimeout(f2, 1000); 
    
    Promise.resolve("i am promise").then((result) => { 
        console.log(result); 
    }); 
    
    Promise.resolve("i am promise 2").then((res) => { 
        console.log(res); 
    }); 
}

main();
