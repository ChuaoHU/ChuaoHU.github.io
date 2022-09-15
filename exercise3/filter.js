function filterCategory(filterSelection,filterBy){
    let itemsToFilter = Array. from(document.getElementsByClassName("RecipeCardWrapper"));
    console.log(itemsToFilter);
    for(let listItem of itemsToFilter){
        console.log(listItem)
        if(listItem.dataset[filterSelection] === filterBy){
            listItem.style.display = "flex";
        }else{
            listItem.style.display = "none";
        }
    }
}

