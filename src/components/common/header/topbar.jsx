import { config } from '@/helpers/config'
import React from 'react'
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="container">
            <div className="slogan">📢 {config.project.slogan}</div>
            <div>Login</div>
        </div>     
    </div>
  )
}

export default Topbar