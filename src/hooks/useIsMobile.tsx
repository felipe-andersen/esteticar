'use client'
import { useState, useEffect } from 'react'


export default function innerWidth(): number {
    let breakpoint = 768
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth)
    function handleResize() {
        setInnerWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return innerWidth
}