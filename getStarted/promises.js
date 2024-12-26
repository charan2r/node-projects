let fruits = ['banana', 'mango'];

const getFruits = () => {
    setTimeout(()=>{
        fruits.forEach(data => {
            console.log(data);
        });

    },2000);

};

const postFruits = (fruit) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fruits.push(fruit);
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject("errors");
            }
            
        }, 2000);
    })
    
};

//getFruits();

/*postFruits('orange').then(getFruits).catch(error=>{
    console.log(error);
});*/

const init = async() =>{
    try {
        await postFruits('orange');
        getFruits;
    } catch (error) {
        console.log(error);
    }
}

init();

