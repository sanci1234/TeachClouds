import { auth } from '@/auth'
import React from 'react'
import UserMenuAuth from './user-menu-auth';
import UserMenuGuest from './user-menu-guest';

const UserMenu = async() => {
    const session = await auth()
    console.log("DATA:",session);
  return (
    <div>
        {session?.user?.role ? <UserMenuAuth session={session} />  :<UserMenuGuest/>}
    </div>
  )
}

export default UserMenu