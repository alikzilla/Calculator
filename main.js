const disp = document.querySelector(".display");

function calculate(){
    try{
		disp.value = eval(disp.value);
    }catch (error){
        disp.value += "ERROR";
    }
}

function updateDisplay(value){
    disp.value += value;
}

function clearDisplay(){
    disp.value = "";
}

function deleteDisplay(){
    disp.value = disp.value.slice(0 , -1);
}

const input = document.querySelectorAll(".buttons");
input.forEach((button) => {
   button.addEventListener("click", () => {
       const btn = button.textContent;

       if(btn === "AC"){
           clearDisplay();
       }else if(btn === "DE"){
           deleteDisplay();
       }else if(btn === "="){
           calculate();
       }else{
           updateDisplay(btn);
       }

   });
});