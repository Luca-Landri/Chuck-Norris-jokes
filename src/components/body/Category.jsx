import React, {useState, useEffect} from 'react'
import './Category.scss'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react';



const Category = () => {
    const [open, setOpen] = useState(false)
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/categories`)
    .then((response) => response.json())
    .then((actualData) => {
        console.log(actualData)
        setCategories(actualData)
    })
    .catch((err) => console.log(err.message));

    console.log(categories)
    }, []);

    return (
        <div onClick={() => setOpen(!open)} className='category-container'>
            <div className='selection'>
                <h4>Select a category</h4>
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="30" height="30" rotate={3} />
            </div>
            {
                open && (
                    <div className='category'>
                        {categories.map((category) => (
                                <p>{category}</p>
                        ))}
                    </div>
            )}                
        </div>
    )
}

export default Category
