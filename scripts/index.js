const ul = document.getElementById("ul-class")
var renderedValues = []
var soma = 0
const valueTotal = document.getElementById("value-total")

function renderValues(array){
    ul.innerHTML   = " "
    soma = 0
    renderedValues = []
    for(let i in array){
    renderedValues.push(array[i]) 
    const li      = document.createElement("li")
    const value   = document.createElement("span")
    const type    = document.createElement("h4")
    const button  = document.createElement("button")
    
    soma+= array[i].value
    
    value.innerText   = `R$ ${array[i].value.toFixed(2)}`
    type.innerText    = array[i].categoryID
    
    button.classList.add("trash")
    button.id = array[i].id

    li.append(value, type, button)
    ul.append(li)

    button.addEventListener("click", (e) => {
        insertedValues = insertedValues.filter((element) => element.id !== Number(e.path[0].id)) 
        renderedValues = renderedValues.filter((element) => element.id !== Number(e.path[0].id)) 
        console.log(insertedValues)
        console.log(e.path[0].id)
        refresh()
        renderValues(insertedValues)
        
    })
    }

    
    valueTotal.innerText = `R$ ${soma.toFixed(2)}`
}
renderValues(insertedValues)

   function refresh(){
    soma = 0
    
    insertedValues.map((obj, i) => {
        obj.id = i + 1
    })
   
    filteredValues.forEach((item) => {
        soma+= item.value
    })
    valueTotal.innerText = `R$ ${soma.toFixed(2)}`
   }



