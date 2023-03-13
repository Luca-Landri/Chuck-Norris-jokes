import React from 'react'
import './Category.scss'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react';

const Category = () => {
  return (
    <div className='category-container'>
        <h4>Select a category</h4>
        <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="30" height="30" rotate={3} />
    </div>
  )
}

export default Category
