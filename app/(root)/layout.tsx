import MobileNav from '@/components/shared/MobileNav'
import SideBar from '@/components/shared/Sidebar'
import React from 'react'

//传入参数是一个对象，对象中的children是React.ReactNode类型
const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root'>
      <SideBar/>
      <MobileNav/>
        <div className='root-container'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    </main>
  )
}

export default Layout