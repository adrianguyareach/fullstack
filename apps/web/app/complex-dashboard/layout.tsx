export default function DashboardLayout({
    children, // will be a page or nested layout
    users,
    revenue,
    notifications
  }: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,

  }) {
    return (
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
    )
  }