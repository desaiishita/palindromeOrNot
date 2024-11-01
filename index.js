function palorNot () {
    let number = document.getElementById('numVal').value * 1;
    let revNum = 0;
    let numCheck = number; 

    //inspired by Medium @ Alexander Obregon
    if (number < 0 || (number % 10 === 0 && number !== 0)) {
        document.getElementById("returnVal").textContent = number + " is not a palindrome";
        return;
    }

    //inspired by Scaler Topics
    while (number > 0) {    
        revNum = revNum * 10 + (number % 10);
        number = Math.floor (number/10);
    }

    if (numCheck === revNum) {
        document.getElementById("returnVal").textContent = numCheck + " is a palindrome";
    } else {
        document.getElementById("returnVal").textContent = numCheck + " is not a palindrome";
    }

}

//reset values 

function resetInput(){
    document.getElementById("numVal").value = "";
    document.getElementById("returnVal").textContent = "";
  }
