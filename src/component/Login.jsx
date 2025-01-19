import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin } from '../store/authSlice'
import {Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login= async(data)=>{
        setError("")
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData)
                    dispatch(authLogin(userData));
                    navigate("/")
                
            }

        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex justify-center items-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]:'>
                    <Logo width='100%' />
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
            <p className='mt-2 text-black/60 text-center text-base'>
                don&apos;t have any account ?&nbsp;
                <Link to="/signup" className='font-medium transition-all duration-200 text-[#0d6efd] hover:underline'>
                    Sign Up
                </Link>
            </p>
            {error &&  
            <p className='text-center text-red-600 mt-8'> 
                {error}
            </p>}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                    label ="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email",{
                        required:true,
                        validate:{
                            matchPatern:(value)=>/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.
                            test(value) || "Email address must be a valid address"
                        }
                    })
                    
                    }
                    />
                    <Input
                    label="Password: "
                    placeholder="Enter your Password"
                    type="password"
                    {...register("password",{
                        required:true,
                    })}
                    />
                    <Button type='submit' className='w-full'>
                        Login
                    </Button>
                </div>
            </form>
        </div>
    </div>  
  )
}

export default Login
