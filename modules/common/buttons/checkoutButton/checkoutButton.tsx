import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const CheckoutButton = () => {
  return (
    <Link href='/checkout'>
        <Button variant={'default'}>Checkout Securely </Button>
    </Link>
  )
}

export default CheckoutButton