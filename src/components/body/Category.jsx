import React, {useState} from 'react'
import './Category.scss'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react';


const Category = () => {
    const [category, setCategory] = useState(false)

    return (
        <div onClick={() => setCategory(!category)} className='category-container'>
            <div className='selection'>
                <h4>Select a category</h4>
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="30" height="30" rotate={3} />
            </div>
            {
                category && (
                    <div className='category'>
                        <p>animal</p>
                        <p>career</p>
                        <p>celebrity</p>
                        <p>dev</p>
                    </div>
            )}                
        </div>
    )
}

export default Category
