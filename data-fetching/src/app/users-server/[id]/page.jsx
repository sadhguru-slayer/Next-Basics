import React from "react";

const MailIcon = () => (
  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16v16H4z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.38 2.39.73 3.5a2 2 0 01-.45 2.11L9.91 10a16 16 0 006 6l.67-.67a2 2 0 012.11-.45c1.11.35 2.29.6 3.5.73a2 2 0 011.72 2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MapMarkerIcon = () => (
  <svg className="w-5 h-5 text-indigo-700 dark:text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-5 h-5 text-indigo-700 dark:text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const UserServer = async ({ params }) => {
  const { id } = await params;
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: "no-store" });
  const user = await response.json();

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-600 to-purple-950 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-8">
          User Details
        </h2>

        <div className="flex items-center space-x-6 mb-10">
          {/* Avatar */}
          <div className="flex-shrink-0 w-24 h-24 rounded-full bg-indigo-500 dark:bg-indigo-700 flex items-center justify-center text-4xl font-bold text-white select-none shadow-md">
            {initials}
          </div>

          {/* User Name and Username */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{user.name}</h3>
            <p className="text-indigo-600 dark:text-indigo-400 text-lg">@{user.username}</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Contact Info */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <MailIcon />
              <a href={`mailto:${user.email}`} className="hover:underline">
                {user.email}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <PhoneIcon />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <GlobeIcon />
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {user.website}
              </a>
            </div>
          </section>

          {/* Address */}
          <section className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-5 shadow-inner">
            <h4 className="text-indigo-700 dark:text-indigo-300 font-semibold text-lg mb-2 flex items-center space-x-2">
              <MapMarkerIcon />
              <span>Address</span>
            </h4>
            <address className="not-italic text-gray-700 dark:text-gray-300 ml-1 space-y-1">
              <p>
                {user.address.street}, {user.address.suite}
              </p>
              <p>
                {user.address.city}, {user.address.zipcode}
              </p>
              <p className="italic text-xs text-indigo-600 dark:text-indigo-400">
                Geo: lat {user.address.geo.lat}, lng {user.address.geo.lng}
              </p>
            </address>
          </section>

          {/* Company */}
          <section className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-5 shadow-inner">
            <h4 className="text-indigo-700 dark:text-indigo-300 font-semibold text-lg mb-2 flex items-center space-x-2">
              <BuildingIcon />
              <span>Company</span>
            </h4>
            <div className="text-gray-700 dark:text-gray-300 ml-1 space-y-1">
              <p className="font-semibold">{user.company.name}</p>
              <p className="italic">"{user.company.catchPhrase}"</p>
              <p className="text-xs">{user.company.bs}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserServer;
