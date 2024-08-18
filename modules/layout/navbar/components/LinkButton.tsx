import Link from 'next/link'
import React, { FC } from 'react'
import { Button } from '@/components/ui/button'

interface LinkButtonProps {
    href: string
    name: string
}

const LinkButton: FC<LinkButtonProps> = ({ href, name }) => {
  return (
    <Link className='px-2' href={href}>
        <Button variant={'ghost'}><p className='text-md'>{name}</p></Button>
    </Link>
  )
}

export default LinkButton
