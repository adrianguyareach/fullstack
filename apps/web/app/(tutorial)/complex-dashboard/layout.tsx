import { before } from "node:test"
import React from "react"

export default function DashboardLayout({
    children, // will be a page or nested layout
    users,
    revenue,
    notifications,
    login
  }: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    login: React.ReactNode

  }) {

    const isLoggedIn = true
    return isLoggedIn ?(
      <div>
        <div>{children}</div>
        <div style={{display: "flex"}}>
          <div style={{display: "flex", flexDirection:"column"}}>
            <div>{revenue}</div>
            <div>{users}</div>
          </div>
          <div style={{display: "flex", flex: 1}}>{notifications}</div>
        </div>
      </div>
    ) :(
      login
    )
  }