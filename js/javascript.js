var century, year, month, dayOfMonth, dayOfWeek, day;

let calculateDay = () => {
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("date").value);

  dayOfWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7) - 1;
  return (Math.floor(dayOfWeek));
}

let findName = () => {
  day = calculateDay();
  checkGender();
}

let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ['Akusua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
let days_array = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

let checkGender = () => {
  var gen = document.getElementsByName("gender");
  if (gen[0].checked == true) {
    var gender = "male";
  } else if (gen[1].checked == true) {
    var gender = "female";
  } else {
    console.log("pass");
  }
  switch (gender) {
    case gender = "male":
      switch (day) {
        case (0 || -0):
          document.getElementById("result").innerHTML = "The day is on a " + days_array[0] + " " + "Your akan name is " + maleNames[0];
          break;
        case (1 || -1):
          document.getElementById("result").innerHTML = "The day is on a" + days_array[1] + " " + "Your akan name is " + maleNames[1];
          break;
        case (2 || -2):
          document.getElementById("result").innerHTML = "The day is on a " + days_array[2] + " " + "Your akan name is " + maleNames[2];
          break;
        case (3 || -3):
          document.getElementById("result").innerHTML = "The day is on a" + days_array[3] + " " + "Your akan name is " + maleNames[3];
          break;
        case (4 || -4):
          document.getElementById("result").innerHTML = "The day is on a " + days_array[4] + " " + "Your akan name is " + maleNames[4];
          break;
        case (5 || -5):
          document.getElementById("result").innerHTML = "The day is on a " + days_array[5] + " " + "Your akan name is " + maleNames[5];
          break;
        case (6 || -6):
          document.getElementById("result").innerHTML = "The day is on a " + days_array[6] + " " + "Your akan name is " + maleNames[6];
          break;
        default:

      }
      break;
    case gender = "female":
      switch (day) {
        case (0 || -0):
          document.getElementById("result").innerHTML = "The day is on a " + days_array[0] + " " + "Your akan name is " + femaleNames[0];
          break;
        case (1 || -1):
          document.getElementById("result").innerHTML = "The day is on a" + days_array[1] + " " + "Your akan name is " + femaleNames[1];
          break;
        case (2 || -2):
          document.getElementById("result").innerHTML = "The day is on a " + days_array[2] + " " + "Your akan name is " + femaleNames[2];
          break;
        case (3 || -3):
          document.getElementById("result").innerHTML = "The day is on a" + days_array[3] + " " + "Your akan name is " + femaleNames[3];
          break;
        case (4 || -4):
          document.getElementById("result").innerHTML = "The day is on a " + days_array[4] + " " + "Your akan name is " + femaleNames[4];
          break;
        case (5 || -5):
          document.getElementById("result").innerHTML = "The day is on a " + days_array[5] + " " + "Your akan name is " + femaleNames[5];
          break;
        case (6 || -6):
          document.getElementById("result").innerHTML = "The day is on a " + days_array[6] + " " + "Your akan name is " + femaleNames[6];
          break;
        default:

      }
      break
    default:

  }
}