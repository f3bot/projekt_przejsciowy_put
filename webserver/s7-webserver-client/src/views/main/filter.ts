import search_ico from './search.png'


const createFilter = () =>{
    const div= document.createElement('div');
    div.classList.add('main-filter-bar')
    const parent_container = document.querySelector('.filter-left')
    if(parent_container == null){
        throw Error("Failed to find a div with selector .filter-left")
    }

    const parent = parent_container as HTMLDivElement;

    div.innerHTML =
    `   
        <div class = 'top-container'>
            <span>FILTER PRODUCTS</span>
            <div class = 'search-bar'>
                <input type="text" placeholder = "Search by name">
                <img src=${search_ico}>
            </div>
        </div>
        <div class = 'filters-container'>
            <div class = 'filter-bar'>
                <span>Tags</span>
                <input type = 'text' placeholder = 'Filter by tag'>
            </div>

            <div class = 'filter-bar'>
                <span>SKU</span>
                <input type = 'text' placeholder = 'Filter by SKU'>
            </div>

            <div class = 'filter-bar'>
                <span>Locations</span>
                <input type = 'text' placeholder = 'All locations'>
            </div>

            <div class = 'filter-bar'>
                <span>Inventory</span>
                <div class = 'input-wrapper'>
                    <input type = 'text' placeholder = 'From'>
                    <input type = 'text' placeholder = 'To'>            
                </div>
            </div>

            <div class = 'filter-bar'>
                <span>Last Modified</span>
                <div class = 'input-wrapper'>
                    <input type = 'date' placeholder = 'From'>
                    <input type = 'Date' placeholder = 'To'>            
                </div>
            </div>
        </div>
        <div class = 'filter-buttons-container'>
            <button class = 'filter-clear'>Clear Filter</button>
            <button class = 'filter-apply'>Apply Filter</button>
        </div>
    `

    parent.appendChild(div);
}

export default createFilter

