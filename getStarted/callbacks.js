let fruits = ['banana', 'mango'];

const getFruits = () => {
    setTimeout(()=>{
        fruits.forEach(data => {
            console.log(data);
        });

    },2000);

};

const postFruits = (fruit, callback) => {
    setTimeout(()=>{
        fruits.push(fruit);
        callback();
    },1000);
};

postFruits('orange', getFruits);
