import React, {useState, useEffect} from 'react'
import './Category.scss'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'



const Category = ({take}) => {
    const [open, setOpen] = useState(false)
    const [categories, setCategories] = useState([])
    const [text, setText] = useState('Select a category')
    
    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/categories`)
        .then((response) => response.json())
        .then((actualData) => {
            setCategories(actualData)
        })
        .catch((err) => console.log(err.message));
    }, []);

    const handleCategory = (category) => {
        take(category)
        setOpen(!open)
        setText(category.category)
        
    }

    return (
    <div className='category-container'> 
        <img className='norris-selection' src="./images/chuck-norris.png" alt="" />
        <motion.div whileTap={{ scale: 0.9 }} className='category'>
            <div className='selection' onClick={() => setOpen(!open)}>
                <h4>{text}</h4>
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="30" height="30" rotate={3} />
            </div>
            {
                open && (
                    <div className='category-selection'>
                        {categories.map((category, index) => (
                            <div key={index} onClick={() => handleCategory({category})}>
                                <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>{category}</motion.p>
                            </div>
                        ))}
                    </div>
            )}                
        </motion.div>
    </div>
    )
}

Category.propTypes = {
    take: PropTypes.func.isRequired,
}

export default Category
