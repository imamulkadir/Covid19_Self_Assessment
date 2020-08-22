var point = 0;
var Age;
var Sex;
document.getElementById("step1").addEventListener("click", step1);

function step1() {
    console.log("Step 1 invoked")
    var age = document.getElementById("age");
    age = age.value;
    var temp = document.getElementById("temp");
    temp = temp.value;
    temp = parseFloat(temp)
    if (temp > 99.5) {
        point = 2;
    }
    var gender = document.querySelector('input[name="gender"]:checked');

    if (gender && age != "" && temp != "") {
        gender = gender.value;
        document.querySelector("#step1").style.display = 'none';
        document.querySelector(".step2").style.display = 'inline-block';
        Age = age;
        Sex = gender;
    }
    else {
        alert('Fill the form');
    }
}

document.getElementById("step2").addEventListener("click", step2);
function step2() {
    var symptom1 = document.getElementsByName('sym1');
    var len = symptom1.length;
    var c = 0;
    for (var i = 0; i < len; i++) {
        if (symptom1[i].checked) {
            c = c + 1
        }
    }

    if (c > 1) {
        point = point + (3 + (c - 1));
    } else if (c == 1) {
        point = point + 3
    }
    document.querySelector(".step2").style.display = 'none';
    document.querySelector(".step3").style.display = 'inline-block';
}

document.getElementById("step3").addEventListener("click", step3);

function step3() {
    var symptom2 = document.getElementsByName('sym2');
    var len = symptom2.length;
    var c = 0;
    for (var i = 0; i < len; i++) {
        if (symptom2[i].checked) {
            c = c + 1
        }
    }
    point = point + c * 2;
    console.log(point);
    document.querySelector(".step3").style.display = 'none';
    document.querySelector(".result").style.display = 'inline-block';
    if (point < 5) {
        document.querySelector(".safe").style.display = 'inline-block';
    } else if (point == 5) {
        document.querySelector(".warning").style.display = 'inline-block';
    } else if (5 < point && point <= 7) {
        document.querySelector(".unsafe").style.display = 'inline-block';
        document.querySelector("#list").style.display = 'block';
    } else if (point > 7) {
        document.querySelector(".danger").style.display = 'inline-block';
        document.querySelector("#list").style.display = 'block';
    }
    var res = document.querySelector(".info");
    res.innerHTML = "<h3> Age : " + Age + ", Gender : " + Sex + "</h3>";
}