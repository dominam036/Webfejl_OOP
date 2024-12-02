// function Player( nickName ){
//     this.nickName = nickName;
//     this.playedMatch = 0;
 
// }
 
// Player.prototype.play = function(){
//     this.playedMatch ++;
//     console.log(this.nickName, this.playedMatch);
// }
 
// Player.prototype.getTierLevel = function(){
//     if( this.playedMatch < 4){
//         return "A"
//     }
//     else if( 3 < this.playedMatch && this.playedMatch < 7 ){
//         return "B"
//     }
//     else {
//         return "C"
//     }
// }
 
class Player{
    constructor( nickName ){
        this.nickName = nickName;
        this.playedMatch = 0;
    }
 
    play(){
        this.playedMatch ++;
        console.log(this.nickName, this.playedMatch);
    }
   
    getTierLevel(){
        if( this.playedMatch < 4){
            return "A"
        }
        else if( 3 < this.playedMatch && this.playedMatch < 7 ){
            return "B"
        }
        else {
            return "C"
        }
    }
}
 
const gomszab = new Player("gomszab");
console.log(gomszab);
gomszab.play();
console.log(gomszab.getTierLevel());
gomszab.play();
console.log(gomszab.getTierLevel());
gomszab.play();
console.log(gomszab.getTierLevel());
gomszab.play();
console.log(gomszab.getTierLevel());
gomszab.play();
console.log(gomszab.getTierLevel());
gomszab.play();
console.log(gomszab.getTierLevel());
gomszab.play();
console.log(gomszab.getTierLevel());
 
// function Person(name){
//     this.name = name;
// }
 
// Person.prototype.getName = function(){
//     return this.name;
// }
 
// function Student(name){
//     Person.call(this, name);
//     this.school = "Bolyai";
// }
 
// Object.setPrototypeOf(Student.prototype, Person.prototype);
 
class Person{
    constructor( name ){
        this.name = name;
    }
 
    getName(){
        return this.name;
    }
}
 
class Student extends Person{
    constructor( name ){
        super(name);
        this.school = "Bolyai";
    }
}
 
const geza = new Student("Géza");
console.log(geza);
console.log(geza.getName());

class Animal{
    constructor(animal){
        this.animal = animal;
    }
    what_animal(){
        if(this.animal == "Bird"){
            let bird = new Bird();
            bird.birdDoes();
        }else if(this.animal == "Mammal"){
            let mammal = new Mammal();
            mammal.mammalDoes();
        }
    }
}
class Mammal extends Animal{
    constructor(){
        super(animal);
        this.voice = "roar";
        this.move = "walk";
    }
    mammalDoes(){
        console.log("Mammals", this.voice, "and", this.move)
    }
}
class Bird extends Animal{
    constructor(){
        super(animal);
        this.voice = "chirp";
        this.move = "fly";
    }
    birdDoes(){
        console.log("The birds", this.voice, "and", this.move)
    }
}

const animal = new Animal("Mammal");
animal.what_animal();