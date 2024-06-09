// Addition - two numbers

function addNumbers(x, y) {
    return x + y;
}


let x = 5;
let y = 10;


sum = 15;


console.log("The sum of" + " " + x + " " + "and" + " " + y + " " + "is"  + " " + sum);



// Addition - three numbers

function addNumbers(a, b, c) {
    return a + b + c;
}


let a = 3;
let b = 5;
let c = 9;


sum = addNumbers(a, b, c);


console.log("The sum of" + " " + a + "," + " " + b + " " + "and" + " " + c + " " + "is" + " " + sum);



// Comparison - two numbers

function compareNumbers(e, d) {
    if (e > d) {
      console.log("e is bigger than d.");
    } else {
      console.log("e is bigger or equal to d.");
    }
  };


compareNumbers(6, 2);



// Age Verification

function displayMessage() {
    let age = prompt("What is your age?");
    
    age = Number(age);

      if (age >= 18) {
        message = "You are 18 or older.";
      } else {
        message = "You are younger than 18.";
      }
  
      console.log(message);
    };

  displayMessage();



  // Conditions 

function displayMessage() {
    let condition = prompt("Is it sunny or is it rainy?")

    let message = condition(rainy, sunny);

    if (rainy && sunny) {
        message = "Both conditions are true.";
    } else if (rainy) {
        message = "At least one condition is false.";
    }
    else if (sunny) {
        message = "At least one condition is false.";
    };

    console.log(message);
}

displayMessage();