import React from 'react'
import {Logo,LogoutBtn,Container} from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector(state=>state.auth.status)
  const navigate = useNavigate();
  const navItem =[
    {
      name:'Home',
      slug: '/',
      Active: true
    },
    {
      name:'Login',
      slug: '/login',
      Active: !authStatus
    },
    {
      name:'Signup',
      slug: '/signup',
      Active: !authStatus
    },
    {
      name:'All Post',
      slug: '/all-posts',
      Active: authStatus
    },
    {
      name:'Add Post',
      slug: '/add-post',
      Active: authStatus
    },
    
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 py-2'>
            <Link to="/">
              <Logo width='80px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItem.map((item)=>

              item.Active?(
                <li key={item.name}> 
                  <button
                  onClick={()=>{navigate(item.slug)}}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ):null
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
