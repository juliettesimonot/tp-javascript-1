const filmsRealisateurs ={"Alien":"Ridley Scott", "Le Parain":"Francis Ford Coppola", "Star wars":"Georges Lucas", "Matrix": "Lana Wachowski, Lilly Wachowski"}

console.log(filmsRealisateurs["Alien"]+"\n"+filmsRealisateurs["Matrix"]);

//splice

const food = [
    ["fanta", "coca", "sprite"],
    ["fries", "cheeseburger", "hotdog"]
];

food.splice(2, 0, ["cheesecake", "icecream", "donut"]);

console.table(food);


//push

const names = ["Bobby", "Willy", "Amy"];

names.push("Kelly");
console.table(names);

names.push(["volley", "basket", "tennis"]);
console.table(names);


//splice
let arrOfHuman = ["john", "james", "bob", "leonard"];
console.table(arrOfHuman);
arrOfHuman.splice(0, 4, "Fraise", "Framboise", "Mytrille");
console.table(arrOfHuman);
let lastName = "Henry"
arrOfHuman.splice(0, 3, "Billy", "Elliot", "William", lastName);
console.table(arrOfHuman);


//push

arrOfHuman = ["john", "james", "bob", "leonard"];
console.log(arrOfHuman.indexOf("james"));
arrOfHuman.push("Manny");
arrOfHuman.forEach(human => {
    console.log(human);
});


//map
const someArr = [1, 2, 3, 4, 5];
console.log(someArr.map(x => x*2));

//filter
const evenArr= someArr.filter(x => x%2==0);
console.log(evenArr);

const oddArr = someArr.filter(x=>x%2==1);
console.log(oddArr);

//max
const maxValueArr = Math.max(...someArr);
console.log(maxValueArr);

//min
const minValueArr = Math.min(...someArr);
console.log(minValueArr);

//sum
const sumValueArr = someArr.reduce((a, b)=> a + b,0);
console.log(sumValueArr);



