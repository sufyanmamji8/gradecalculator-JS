let userPercentage = document.querySelector("#percent");
let screenShow = document.querySelector("#mypara");
let form = document.querySelector("#gradeform");

gradeform.addEventListener("submit", (event) =>{
    event.preventDefault();

    let grade = Number(userPercentage.value);

if(grade>=80){
    screenShow.innerText = "congratulations! you got A+ grade";
}

else if(grade>=70){
    screenShow.innerText = "congratulations! you got A grade";
}

else if(grade>=60){
    screenShow.innerText = "You got B grade You need some improvement";
}

else if(grade>=50){
    screenShow.innerText = "You got C grade You need some improvement";
}

else{
    screenShow.innerText = "sorry but you are fail";
}

});