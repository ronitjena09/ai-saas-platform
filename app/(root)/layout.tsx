import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar />
      {/* <MobileNavbar /> */}
      
      
      
      {children}</main>
  )
}

export default Layout