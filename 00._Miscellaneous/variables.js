//Vi opretter en person  
const me = {
    /*
     Key: value
       === key-value pairs
    */
   name: "Karen"
};

//for at ændre værdier
//.name --> er en key 
me.name = "Laura"
console.log(me);

//Data sturcture
const hobbies = ["Football", "swimming"];
hobbies.push("cooking");
me.hobbies = hobbies;
console.log(me);

//Quotaions
const hobbyOne ="Football skills level: '6'";
const hobbyTwo ='Swimming skill level:  "3"';
const hobbyThree =`Cooking skill level: "'${2+2}'"`; //string interpolation - string template literal 
console.log(hobbyThree);
