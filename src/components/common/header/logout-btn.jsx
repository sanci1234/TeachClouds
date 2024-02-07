"use client"
import { signOut } from "next-auth/react";
import { swalConfirm } from '@/helpers/swal'
import React from 'react'

const handleLogout = async() => {
  const resp = await swalConfirm("Are you sure logout?");
  if(!resp.isConfirmed)return;

  signOut({callbackUrl:"/"});
}

const LogoutBtn = () => {
  return (
    <a className="nav-link" role="button" onClick={handleLogout} >
      Logout
    </a>
  )
}

export default LogoutBtn