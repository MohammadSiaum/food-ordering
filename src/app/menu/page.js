'use client';

import React, { useEffect, useState } from 'react';
import SectionHeader from '../../components/layout/SectionHeader';
import MenuItem from '../../components/menu/MenuItem';

const MenuPage = () => {
    const [categories, setCategories] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [isLoading, setIsLoaging] = useState(true);

    useEffect(() => {
        setIsLoaging(true);
        fetch('/api/categories')
          .then(res => res.json())
          .then(data => setCategories(data))

        fetch('/api/menu-items')
          .then(res => res.json())
          .then(data => setMenuItems(data))

        setIsLoaging(false);

    }, [])

    if(isLoading) {
        return (
            <div className='text-center mt-32'>
                <h2>Menu item loading..</h2>
            </div>
        )

    }

    return (
        <div className='mt-20'>
            {categories?.length > 0 && categories.map(c => (
                <>
                  <div className=''>
                     <div>
                        <h2 className='text-center font-semibold text-fuchsia-700 text-4xl'>{c.name}</h2>
                     </div>
                     <div className='grid grid-cols-4 gap-7 mt-10 mb-14'>
                        {menuItems.filter(item => item.category === c.name).map(item=>(
                            <MenuItem key={item._id} item={item} />
                        ))}
                     </div>
                  </div>
                
                </>
            ))}
        </div>
    );
};

export default MenuPage;