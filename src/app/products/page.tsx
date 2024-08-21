"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [products ,setProduct] =useState<any>()
    useEffect(()=>{
        axios.get('http://localhost:3000/api/user')
        .then((res)=>{
            setProduct(res.data.data)
        }   
        )
    })
  return (
    <div>
        {
            products?.map((item:any)=>{
                return <div key={item.id}>
                    Name :{item.name}
                </div>

            })
        }
      
    </div>
  )
}
