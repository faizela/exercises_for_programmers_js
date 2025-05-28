
/* exercise 21 
// psuedocode 
//  problem statememnt
// user enters a number program responds with number
// tools used : switch cases for name of the month

// plan
// get input from user 
// add that input to variable numMonth
// and pass that to switch case
// match cases to numMonth
// display relevant case msg to numMonth
// if input is not between 1 -12


let numMonth = parseInt(prompt("Please enter the number of the month:"))

switch(numMonth) {
    case 1:
      alert("The name of the month is January")
      break;
    case 2:
        alert("The name of the month is February")
      break;
      case 3:
        alert("The name of the month is March")
      break;
      case 4:
        alert("The name of the month is April")
      break;
      case 5:
        alert("The name of the month is May")
      break;
      case 6:
        alert("The name of the month is June")
      break;
      case 7:
        alert("The name of the month is July")
      break;
      case 8:
        alert("The name of the month is September")
      break;
      case 9:
        alert("The name of the month is August")
      break;
      case 10:
        alert("The name of the month is October")
      break;
      case 11:
        alert("The name of the month is November")
      break;
      case 12:
        alert("The name of the month is December")
      break;
    default:
        alert("Enter a number between 1 - 12 next time : (")
  } 
  */

// exercise 23 




let askCarSilent = prompt("Is the car silent when you turn the key? - answer in y or n")

function carSilentNo () {

  let askClickNoise = prompt("Does the car make a clicking noise?") 
  if (askClickNoise.toLowerCase() === 'y') {
      alert('replace the battery')
  }
  else if (askClickNoise.toLowerCase() === 'n') {
          let askCrankup = prompt("Does the car crank up but fail to start?") 
          if (askCrankup.toLowerCase() === 'n') {
              let askEngine = prompt("Does the engine start and then die")
              if (askEngine.toLowerCase() === 'y') {
                  let askFuel = prompt("Does your car have fuel injection?")
                  if (askFuel.toLowerCase() === 'y') {
                      alert("Get it in for service")
                  }
                  else if (askFuel.toLowerCase() === 'n') {
                      alert('Check to ensure the choke is opening and closing.')
                  } 
              }
          }
          habitgoaltracker

          intrasoft
          
          com.intrasoft
      } 
  }   
  

if (askCarSilent.toLowerCase() === 'n') {
  carSilentNo()

}

else if  (askCarSilent.toLowerCase() === 'y') {
    let askBattery  = prompt("Are the battery terminals corroded?")
    if  (askBattery.toLowerCase() === 'y') {
        alert('Clean terminals and try starting again.')
    }
    else {
        alert(' Replace cables and try again.')
    }

}

