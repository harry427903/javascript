

const threeAverage = (score1,score2,score3) => ((score1,score2,score3)/3)

let team1Average = threeAverage(44,23,71);
let team2Average  = threeAverage(65,54,49);


const checkWinner = function(avgDolphins , avgKoalas){
    if(avgDolphins > avgKoalas){
        console.log("Dolphins wins the Match by : " + avgDolphins  
        + " v/s " + avgKoalas);
    }   
    else if (avgKoalas > avgDolphins){
        console.log("Koalas wins the Match by : " + 
        avgKoalas + " v/s " + avgDolphins);
    }else{
        console.log("Match Drawn " + avgDolphins + " v/s " + avgKoalas);
    }
}

checkWinner(team1Average,team2Average);
