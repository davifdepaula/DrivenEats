let total = 0
function selection(element) {
    if (element.parentNode.classList[0] == "mainCourse"){
        makeSelection("mainCourse", element)
    }

    else if (element.parentNode.classList[0] == "drink"){
        makeSelection("drink", element)
    }

    else if (element.parentNode.classList[0] == "dessert"){
        makeSelection("dessert", element)
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

function getTotal(){
    console.log(total);
};


