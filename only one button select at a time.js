let players_array = [];
let players = document.getElementsByClassName('clickable');
players_array.push(players[0], players[1], players[2]);
var active_added = false;

for (let i = 0; i < players_array.length; i++){
    players_array[i].addEventListener('click', function selected(){
        console.log("listeners added to players")
        if (this.classList.contains('active')){ 
            for (let i = 0; i < players_array.length; i++){
                players_array[i].classList.remove('active') //remove all, not just one
                active_added = false;

            }//second for loop ends here    
      
        }else if (active_added == false){
            this.classList.add('active')
            active_added = true;
        }else{
            console.log("what the fuck")
        };
    }//listener ends here
)};//first for loop ends here
