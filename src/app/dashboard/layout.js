'use client'
import Link from 'next/link';
import React from 'react';
import { useProfile } from "../../components/UserProfile";
import { usePathname } from 'next/navigation';



const DashboardLayout = ({children}) => {
  const { loading, data } = useProfile();
  const path = usePathname();

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!data.admin) {
    return (
        <div className="text-center text-xl text-red-600 mt-20">
          <h2>You have anythig wrong !</h2>
        </div>
      );
  }

    return (
        <section className='grid grid-cols-3 gap-20 mt-14 '>
            {/* dash menu */}
            <div>
                <div className='text-gray-900 border border-gray-300 rounded text-md bg-gradient-to-t from-fuchsia-200 to-blue-200 space-y-6 p-11'>
                    <Link className={path === '/dashboard' ? 'block pl-5 rounded border border-gray-400 bg-purple-600 text-white p-1' : 'block pl-5 hover:bg-purple-400 bg-purple-300 p-1 rounded border border-gray-400'} href={'/dashboard'}>Profile</Link>
                    <Link className={path === '/dashboard/categories' ? 'block pl-5 rounded border border-gray-400 bg-purple-600 text-white p-1' : 'block pl-5 hover:bg-purple-400 bg-purple-300 p-1 rounded border border-gray-400'} href={'/dashboard/categories'}>Categories</Link>
                    
                    <div className='space-y-4'>
                        <Link className={path.includes('/dashboard/menu-items') ? 'block pl-5 rounded border border-gray-400 bg-purple-600 text-white p-1' : 'block pl-5 hover:bg-purple-400 bg-purple-300 p-1 rounded border border-gray-400'} href={'/dashboard/menu-items'}>Menu Items</Link>

                        <div className='ml-14 space-y-4'>
                            <Link className={path === '/dashboard/menu-items/view-items' ? 'block pl-5 rounded-md text-sm border border-gray-400 bg-purple-600 text-white p-1' : 'block pl-5 hover:bg-purple-400 bg-purple-300 p-1 rounded-md text-sm border border-gray-400'} href={'/dashboard/menu-items/view-items'}>View all items</Link>

                            <Link className={path === '/dashboard/menu-items/add-item' ? 'block pl-5 rounded-md text-sm border border-gray-400 bg-purple-600 text-white p-1' : 'block pl-5 hover:bg-purple-400 bg-purple-300 p-1 rounded-md text-sm border border-gray-400'} href={'/dashboard/menu-items/add-item'}>Add item</Link>
                            

                        </div>
                    </div>
                    <Link className={path === '/dashboard/users' ? 'block pl-5 rounded border border-gray-400 bg-purple-600 text-white p-1' : 'block pl-5 hover:bg-purple-400 bg-purple-300 p-1 rounded border border-gray-400'} href={'/dashboard'}>Users</Link>

                </div>

            </div>

            {/* contact */}
            <div className='col-span-2'>
                {children}
            </div>
        </section>
    );
};

export default DashboardLayout;