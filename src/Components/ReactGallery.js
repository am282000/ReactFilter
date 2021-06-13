import React,{useState} from 'react'
import "./Tab.css"
import Menu from './Menu'
import MenuItems from './MenuItems'
import MenuCategory from './MenuCategory'

const allCategoryValues = [ ...new Set(Menu.map((currElem)=>{
    return currElem.category;
})),"all" ]
console.log(allCategoryValues)

const ReactGallery = () => {

    const [items, setItems] = useState(Menu)
    const [catItems, setCatItems] = useState(allCategoryValues) 

    const filterItem = (category) => {

        if(category ==="all"){
            setItems(Menu);
            return;     // very imp thing don't forget to write it
        }

        const updatedItems = Menu.filter((currElem)=>{
            return currElem.category === category;
        })
        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Food</h1>
            <hr />
            {/* Our menu list */}
            <MenuCategory filterItem ={filterItem}  catItems={catItems} />
            {/* My menu items Section */}
            <MenuItems items={items} />
        </>
    )
}

export default ReactGallery
