// this no longer bound to arrow function
// arguments no longer bound to arrow function

const add = (a,b) => {
    //console.log(arguments);
    return a+b;
}
console.log(add(10,2,552));

const user = {
    name:'keshav',
    cities:['a','b','c'],
    printPlaces: function() {
         console.log(this.name + ' '+this.cities );

         const cityMessage = this.cities.map((city) => {
            return this.name+' had lived in ' + city;
        });

        return cityMessage;
    }    
}

const multiplier = {
    
    numbers : [11,22,33,44,55,66,77,88,99],
    multiplyBy: 2,
    multiply: function(){
    const result = this.numbers.map((num) => {
        return num * this.multiplyBy;
    }); 
    return result;
}
}

console.log(multiplier.multiply())