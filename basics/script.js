function Player( nickName ){
    this.nickName = nickName;
    this.playedMatch = 0;

}

Player.prototype.play = function(){
    this.playedMatch ++;
    console.log(this.nickName, this.playedMatch);
}

Player.prototype.getTierLevel = function(){
    if( this.playedMatch < 4){
        return "A"
    } else if( 3 < this.playedMatch && this.playedMatch < 7 ){
        return "B"
    } else {
        return "C"
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