"use client"
import { usePathname } from 'next/navigation';
// import React, { useEffect } from 'react'
import { MenuItems } from '../(data)/Templates';

function Header() {

    const path = usePathname();    

  return (
      <div className='mt-[18px] px-8 mx-[18px] py-[5px] bg-background rounded-[70px] flex items-center justify-between'>
        <div>
            <a href='/'>
                <img src='/logo.png' alt='tech care logo' className='h-12' />
            </a>
        </div>
        <div className='flex '>
        {MenuItems.map((menu, index) => (
              <a key={menu.name} href={menu.path}>
                  <div className={`flex gap-2 mx-4 my-[11px] px-4 py-[11px]
        hover:bg-activeState_1 hover:text-white rounded-[41px] cursor-pointer items-center justify-center
        ${path==menu.path&&'bg-activeState_1'}
        `}>
                      <img src={`${menu.icon}`} className='h-[17px]'/>
                      <h2 className='emphasized'>{menu.name}</h2>
                  </div>
              </a>
          ))}
        </div>
          <div>
              <div id='container' className='gap-2 flex items-center'>
            <div id='avatar' className="min-h-11 min-w-11 bg-user_avatar bg-contain rounded-full">
            </div>
              <div className='flex flex-col pr-3 border-r border-border mr-1'>
                  <div id='username'>
                      <h4 className='emphasized'>Dr. Joe Simmons</h4>
                      <h4 className='secondary'> General Practitioner</h4>
                  </div>
                  </div>
                  <img src='/settings.png' alt='settings' className='h-5 mr-3' />
                  <img src='/options.png' alt='options' className='h-5 ' />
              </div>
                
        </div>
    </div>
  )
}

export default Header