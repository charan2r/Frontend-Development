function clearData() {
    document.getElementById('tempval').value = "";
    document.getElementById('convertedVal').innerHTML = 0;
    document.getElementById('display').style.backgroundColor = "gray";
}

function convertTemp() {
    var selection = document.getElementById('selecter').value;
    var tempval = document.getElementById('tempval').value;

    if (selection == "Select") {
        alert("Please select C to F or F to C");
    }
    if (selection == "Add") {
        var answer = (tempval * 9 / 5) + 32;
        if (answer > 0) {
            document.getElementById('display').style.backgroundColor = "green";
        } else {
            document.getElementById('display').style.backgroundColor = "red";
            
        }
        document.getElementById('convertedVal').innerHTML = answer.toFixed(2);

    }
    if (selection == "Celsius_to_Fahrenheit") {
        var answer = (tempval * 9 / 5) + 32;
        if (answer > 0) {
            document.getElementById('display').style.backgroundColor = "green";
        } else {
            document.getElementById('display').style.backgroundColor = "red";
        }
        document.getElementById('convertedVal').innerHTML = answer.toFixed(2);
    }

}

function checkPrositive(val){
    if(val == ""){
       
    }
    if(val == 0){
        alert("Please enter prositive value");
    }
    
  
}