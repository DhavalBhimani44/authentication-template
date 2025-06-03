"use client"

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomeView = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession()
    if (!session) {
        return (
            <div>Loading...</div>
        )
    }

    if (session) {
        return (
            <Button variant={"destructive"} onClick={() => authClient.signOut({ fetchOptions: { onSuccess: () => router.push('/sign-in') } })}>
                Log out
            </Button>
        )
    }
}

export default HomeView