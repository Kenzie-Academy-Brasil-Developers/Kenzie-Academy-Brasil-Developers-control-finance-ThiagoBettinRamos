const filterButtons  = document.querySelectorAll("[data-filter-category]")
var filteredValues   = []
var selectedCategory = "Todos"

filterButtons.forEach((button) =>{
    button.addEventListener("click", () => {
        if(button.dataset.filterCategory === "Todos"){
            filteredValues = insertedValues
        }
        else{
            filteredValues   = insertedValues.filter((item) => item.categoryID === button.dataset.filterCategory)
            selectedCategory = button.dataset.filterCategory
        }
        renderValues(filteredValues)
    })
})