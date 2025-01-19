import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout({children,authentication=true}) {

    const navigate = useNavigate() 
    const [loader ,setLoader] = useState(true)
    const authstatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        console.log("heyyy what's upp" , authstatus)
        if(authentication && authstatus !== authentication){
            navigate("/login")
        }
        else if(!authentication && authstatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authstatus, navigate, authentication])

  return loader? <div className='min-h-screen flex justify-center items-center font-medium text-5xl text-pink-800 bg-gray-300'>loading.....</div> : <>{children}</>
}

 
