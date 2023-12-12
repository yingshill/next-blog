"use client"
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

export default function ThemeProvider() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme}>ThemeProvider
      
    </div>
  )
}
