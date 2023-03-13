import React, {useState, useEffect} from 'react'
import './Category.scss'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react';



const Category = ({take}) => {
    const [open, setOpen] = useState(false)
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/categories`)
    .then((response) => response.json())
    .then((actualData) => {
        setCategories(actualData)
    })
    .catch((err) => console.log(err.message));

    console.log(categories)
    }, []);

    return (
    <div className='category-container'> 
        <img className='norris-selection' src="./images/chuck-norris.png" alt="" />
        <div className='category'>
            <div className='selection' onClick={() => setOpen(!open)}>
                <h4>Select a category</h4>
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="30" height="30" rotate={3} />
            </div>
            {
                open && (
                    <div className='category-selection'>
                        {categories.map((category, index) => (
                                <div key={index} onClick={() => take({category})}>
                                <p>{category}</p>
                            </div>
                        ))}
                    </div>
            )}                
        </div>
    </div>
    )
}

Category.propTypes = {
    take: PropTypes.func.isRequired
}

export default Category
