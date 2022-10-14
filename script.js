function makeSelection(){
    const element = document.querySelector(".option")
    if(element.classList.contains("select")){
        element.classList.remove("select")
    }
    else{
        element.classList.add("select")
    }

}

function makeCheck() {
    const element = document.querySelector(".check")
    if(element.classList.contains("hidden")){
        element.classList.remove("hidden")
    }
    else{
        element.classList.add("hidden")
    }
}

function addCost() {
    let valueToPay = 0
    const element = document.querySelector(".check")
    if(element.classList.contains("hidden")){
        const price = document.querySelector(".paid")
        valueToPay -= Number(price.innerHTML)
    }
    else{
        const price = document.querySelector(".paid")
        valueToPay += Number(price.innerHTML)
    }
return valueToPay
}

