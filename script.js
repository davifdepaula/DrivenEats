let total = 0, food="", dessert = "", drink=""
function selection(element) {
    if (element.parentNode.classList[0] == "mainCourse"){
        makeSelection("mainCourse", element)
        food = element.querySelector(".foodName")
        food = food.innerHTML
    }

    else if (element.parentNode.classList[0] == "drink"){
        makeSelection("drink", element)
        drink = element.querySelector(".foodName")
        drink = drink.innerHTML
    }

    else if (element.parentNode.classList[0] == "dessert"){
        makeSelection("dessert", element)
        dessert = element.querySelector(".foodName")
        dessert = dessert.innerHTML
    } 

    if(document.querySelector(`.mainCourse .select`) !== null &&
    document.querySelector(`.drink .select`) !== null &&
    document.querySelector(`.dessert .select`) !== null){
        const parentClass = document.querySelector(".footerContainer")
        parentClass.classList.add("footerContainerBackground")
        const flag = document.querySelector(".footerText")
        flag.innerHTML = "fechar pedido"
    }
};

function makeSelection(parent, element) {
    const flag = document.querySelector(`.${parent} .select`);
    if (flag !== null) {
        flag.classList.remove("select");
        flag.classList.add("option");
        flag.querySelector(".check").classList.add("hidden");
        total -= Number(flag.querySelector(".paid").innerHTML);
    };
    element.classList.remove("option")
    element.classList.add("select");
    element.querySelector(".check").classList.remove("hidden");
    total += Number(element.querySelector(".paid").innerHTML); 

};


function getTotal(element){
    if (element.classList.contains("footerContainerBackground")){
        https://wa.me/5511968374030?text="fala"
        console.log(food)
        console.log(drink)
        console.log(dessert)
        console.log(total)
    }

};



