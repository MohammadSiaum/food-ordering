'use client'
import Link from 'next/link';
import React from 'react';
import { useProfile } from "../../components/UserProfile";
import { usePathname } from 'next/navigation';
import DashboardMenuItem from '../../components/layout/DashboardMenuItem'



const DashboardLayout = ({children}) => {
  const { loading, data } = useProfile();


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
        <section className='grid grid-cols-3 gap-20 mt-24 '>
            {/* dash menu */}

            <div className=''>
              <div className='sticky top-24'>
                <DashboardMenuItem />
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