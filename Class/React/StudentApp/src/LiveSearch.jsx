//Component example 2
import { useState } from "react";

function LiveSearch(){
    const [query, setQuery] = useState("");

    const items = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

    const filterItems = items.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
    );

    return(
        <>
            <h2>Fruit Search</h2>
            <input type="text" placeholder="Search fruits.." value={query} onChange={(e) => setQuery(e.target.value)}/>
            
            <ul>
                {filterItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default LiveSearch;