'use client'

import '../public/assets/css/style.css'
import '../public/assets/css/modal.css'
import '../public/assets/css/swiper-custom.css'
import React, {useEffect, useState} from 'react'
import Preloader from '../components/elements/Preloader'

export default function ClientLayout({children}) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 0)

        if (typeof window !== 'undefined') {
            const WOW = require('wowjs')
            new WOW.WOW().init()
        }
    }, [])

    return <>{!loading ? children : <Preloader />}</>
}
