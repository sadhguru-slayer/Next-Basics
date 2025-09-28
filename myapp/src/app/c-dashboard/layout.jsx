export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login, // this is the modal component
}) {
  const isLogin = false; // simulate logged out

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Main Content */}
      {children}

      {/* Left Panel */}
      {isLogin ? (
        <>
          <div className="w-full lg:w-1/3 flex flex-col divide-y divide-gray-200 border-r border-gray-200 bg-gray-50">
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-sm text-gray-600">Users</div>
                <div className="text-2xl font-bold">{users}</div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-sm text-gray-600">Revenue</div>
                <div className="text-2xl font-bold">{revenue}</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 p-6">{notifications}</div>
        </>
      ) : null}

      {/* Login modal (shows only when logged out) */}
      {!isLogin && login}
    </div>
  );
}
