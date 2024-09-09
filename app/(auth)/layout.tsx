import React from 'react'

//传入参数是一个对象，对象中的children是React.ReactNode类型
const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="auth">{children}</main>
  )
}

export default Layout