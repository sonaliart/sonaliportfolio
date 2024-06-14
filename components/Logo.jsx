import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = ({ theme }) => {
  return (
    <Link href="/">
        <Image
          src={theme === 'dark' ? "./logo/logoblack.svg" : "./logo/logoblack.svg"}
          alt="Logo"
          width={100}
          height={100}
        />
    </Link> 
  )
}

export default Logo