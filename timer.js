

// function myTimer(){
//     document.getElementById("timer").innerHTML = input;
//     let input = parseInt(document.getElementById("userInput").value);
//     while(!isNaN(input) && input > 0){
//         document.getElementById("timer").innerHTML = input;
//         input--;
//     }
// }

function myTimer(){
    let input = parseInt(document.getElementById("userInput").value);
    if(!isNaN(input) && input > 0){
    let clock = setInterval(function(){
        document.getElementById("timer").innerHTML = input;
        input--; 
    }, 1000);
} else if(input <= 0){
    alert("DONE!");
}
}









// function myTimer(){
//     let input = parseInt(document.getElementById("userInput").value);
//     let int = setInterval(function() {
//         while(!isNaN(input) && input > 0){
//             document.getElementById("timer").innerHTML = input;
//             input--;
            
//         }}, 1000);
//     }







// function myTimer(){
//     let input = parseInt(document.getElementById("userInput"));
//     var int = setInterval(function(){
//         document.getElementById("timer").innerHTML = input;
//         input-- || clearInterval(int);
//     }, 1000);
// }

