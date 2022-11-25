// selecting the output screen
let screen =document.querySelector(".screen"),
// selecting all the operand buttons (. and numbers)
    numbers=document.getElementsByClassName("btn-number");
// defining a variable to check whether the button is an operator or not
let is_operator = false 
    for (let number of numbers){
    number.onclick = (e)=>{ 
        // click what happens when the button is clicked
        if (screen.textContent == 0)
            screen.textContent=e.target.textContent
        else if (screen.textContent.includes(".")){
            screen.textContent = screen.textContent + "" + e.target.textContent.replace(".","") ;
        } else if (is_operator) {
            is_operator = false 
            screen.textContent = e.target.textContent;
        } else {
            screen.textContent = screen.textContent + "" + e.target.textContent
        }
    }
};
const operators = document.querySelectorAll("span[class='operator']")
let equation =[];
operators.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        switch (e.target.textContent){
            case "=":
                equation.push(screen.textContent)
                screen.textContent=eval(equation.join(""))
                equation = [];
                break;
            default :
                let last_item = [equation.length -1];
                if (["*","/","+","-"].includes(last_item) && is_operator){
                    equation.pop()
                    if (e.target.textContent != "x"){
                        equation.push(e.target.textContent)
                    }else {
                        equation.push("*")
                    }
                }
                else {
                    equation.push(screen.textContent)
                    e.target.textContent != "X" ? equation.push(e.target.textContent) : equation.push("*")
                }
                is_operator = true
                break;
        }
    })
})
// functionality of the delete button 
let del = document.getElementById("del");
del.onclick = () =>{
    if (screen.textContent.length != 0){
        let arr = screen.textContent.split("")
    screen.textContent = screen.textContent.split("").
    splice(0,arr.length-1)
    .join("")
    }
    if (screen.textContent.length == 0){
        screen.textContent = 0
    }
}
// functionality of the reset button
let reset = document.getElementById("reset");
reset.onclick = () =>{
    screen.textContent = 0
    commafy(screen.textContent)
}
function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    screen.textContent=str.join('.');
}
commafy(screen.textContent)

// toggling themes 
let head_children=document.head.children,
    toggle_themes = document.querySelector(".toggle_themes"),
    ball = document.querySelector(".ball");
    style_0 = document.head.querySelector("link[href='./style.css']"),
    style_1 = document.head.querySelector("link[href='./style1.css']"),
    style_2 = document.head.querySelector("link[href='./style2.css']");
    document.head.removeChild(style_1)
    document.head.removeChild(style_2)
    toggle_themes.onclick=(e)=>{
    if (e.x - toggle_themes.getBoundingClientRect().x <= 20){
        if(Object.values(head_children).includes(style_1)){
            document.head.removeChild(style_1)
        }
        if(Object.values(head_children).includes(style_2)){
            document.head.removeChild(style_2)
        }
    } else if (e.x - toggle_themes.getBoundingClientRect().x <= 40){
        if(! Object.values(head_children).includes(style_1)){
            document.head.appendChild(style_1)
        }
        if (Object.values(head_children).includes(style_2)){
            document.head.removeChild(style_2)
        }
    }else {
        if (! Object.values(head_children).includes(style_2)){
            document.head.appendChild(style_2)
        }
        if (Object.values(head_children).includes(style_1)){
            document.head.removeChild(style_1)
        }
    }
} 