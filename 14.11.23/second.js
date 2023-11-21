// var result;
// console.log("Enter the number");
// if(result>50){
//     console.log("congratulation you are passed");

// }else{
//     console.log("sorry,you failed");
// }
// var food="normal";
// if (food=="hot") {
//     console.log("I like hot food");
// }
// else if(food == "cold"){
// console.log("too cold");
// }
// else{
//     console.log('unknown type of food');
// }
// var place="first";
// switch(place){
//     case 'first':
//         console.log("this is first floor");
//         break;
//         case 'second':
//             console.log("this is second floor");
//             break;
//             case 'third':
//                 console.log("this is third floor");
//                 break;
//                 case 'fourth':
//                     console.log("this is fourth floor");
//                     break;
//                     default:
//                         console.log("unknown floor");
// }
// var age=65;
// if(age>=65)
// {
//     console.log("You get your income from pension");

// }
// else if(age<65 && age>18){
//     console.log("Each month you get a salary");

// }
// else if(age<18){
//     console.log("You get an allowance");
// }
// else{
// console.log("the value is nor numerical");
// }

// var name="sunday";
// switch(name){
//     case 'Monday':
//         console.log("Do something");
//     break;
//     case 'Tuesday':
//         console.log("Do something else");
//         break;
//         case 'Wednesday':
//             console.log("Do another thing");
//             break;
//             case 'Thursday':
//                 console.log("Do one more thing");
//                 break;
//                 case 'Friday':
//                     console.log("Do the last thing");
//                     break;
//                     case 'Saturday':
//                         console.log("Do nothing");
//                         break;
//                         case 'sunday':
//                             console.log("Do nothing");
//                             break;  
//                             default:
//                                 console.log("This day does not exist");
//                                 }
// for(var i=0;i<10;i++){
//     console.log(i);
// }
// var counter=3;
// while(counter>0){
//     console.log(counter);
//     counter=counter-1;
// }

// for(var i=0; i<2; i++){
//     for(var j=1; j<=7; j++){
//         console.log("week " + i + " day " + j);
//     }
// }
// var counter=1;
// for(var i=1;i<=5;i++)
// {
//     switch(i){
//             case 1:
//                 console.log("this is first floor");
//                 break;
//                 case 2:
//                     console.log("this is second floor");
//                     break;
//                     case 3:
//                         console.log("this is third floor");
//                         break;
//                             default:
//                                 console.log(i);
//         }
// }
//function
// function addtwonum(){
//     var a=10;
//     var b=10;
//     var c=a+b;
//     console.log(c);
// }
// addtwonum();

 
// function listarrayitems(arr){
// for(var i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }
// }
// var colors=['red','blue','green','pink'];
// var train=["wheat","bentley","Audi","Civic"];
// listarrayitems(colors);
// listarrayitems(train);
//objects
// var table={
//     legs:3,
//     color:"brown",
//     priceUSD:100,
// }
// console.log(table);
// console.log(table.color);

// var car={};
// car.color="red";
// car["color"]="green";
// car["speed"]=200;
// car.speed=100;
// console.log(car);

// var arrofkey=['speed','altitude','color'];
// var drone={
//     speed:500,
//     altitude:8000,
//     color:'black'

// }
// for(var i=0;i<arrofkey.lenght;i++){
//     console.log(drone[arrofkey[i]]);
// }
// var fruits=[];
// fruits.push('apple');
// fruits.push('banana');
// fruits.pop();
//console.log(fruits);

function arraybuilder(one,two,three){
    var arr=[];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr=arraybuilder('apple','banana','blue');
console.log(simpleArr);
