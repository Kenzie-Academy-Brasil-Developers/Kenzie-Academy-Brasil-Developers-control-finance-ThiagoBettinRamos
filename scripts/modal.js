
const buttonRegister = document.getElementById("register")
buttonRegister.addEventListener("click", () => {
    const pageBody = document.querySelector("body");
    pageBody.insertAdjacentHTML("afterbegin", `
<div id="modalRegister">
<section class="container-model">
        <div class="modalClose">
            <h2>Registro de valor</h2>
            <button id="close">X</button>
        </div>
        <div>
            <p>Digite o valor e em seguida aperte no botão referente ao tipo do valor.</p>
        </div>
        <form class="inputs">
                <h4>Valor</h4>            
                <input name="value" id="value-insert" type="value" required="true">
                <div class="insert">
                    <h5>Tipo de valor: </h5>
                    <a class="category-button" data-category="Entrada">Entrada</a>
                    <a class="category-button" data-category="Saída">Saída</a>
                </div>
                <button type="button" id="submit">Inserir valor</button>
        </form>
</section>
</div>
`)
    var selectedCategory;
    const categoryButtons = document.querySelectorAll("[data-category]")
    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            selectedCategory = button.dataset.category
            console.log(selectedCategory)
            if(selectedCategory === "Entrada"){
                categoryButtons[0].classList = "category-button-selected"
                categoryButtons[1].classList = "category-button"
            }
            if(selectedCategory === "Saída"){
                categoryButtons[0].classList = "category-button"
                categoryButtons[1].classList = "category-button-selected"
            }
        })
    })
    const insertValueButton = document.getElementById("submit")
    insertValueButton.addEventListener("click", () => {
        const value1 = Number(document.getElementById("value-insert").value)
        var newId    = insertedValues.length+1
        let newValue = {
            id: newId, 
            value: value1,
            categoryID: selectedCategory
        }
        if(value1 > 0 && selectedCategory !== undefined){
        insertedValues.push(newValue)
        filteredValues = insertedValues.filter((item) => item.categoryID === selectedCategory)
        renderValues(filteredValues)
    }
        const modalX = document.getElementById("modalRegister")
        modalX.remove()
    })

    const buttonClose = document.getElementById("close")
    buttonClose.addEventListener("click", () => {
        const modalX = document.getElementById("modalRegister")
        modalX.remove()
    })
})