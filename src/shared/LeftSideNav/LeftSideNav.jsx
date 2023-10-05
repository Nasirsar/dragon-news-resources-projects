import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories,setCategories] =useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="space-y-8 w-full">
            <h2>left side navbar </h2>
            {
                categories.map(category=> <Link to={`/category/${category.id}`} className="block ml-4 text-sm font-semibold px-4" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;