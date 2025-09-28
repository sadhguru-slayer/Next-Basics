import React,{Suspense} from "react";

const getUserPosts = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, { cache: "no-store" });
  return res.json();
};

const getUserDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: "no-store" });
  return res.json();
};

const getUserAlbums = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`, { cache: "no-store" });
  return res.json();
};

const UserDetailsInParallel = async ({ params }) => {
  const { id } = await params;

  const [userDetails, userPosts, userAlbums] = await Promise.all([
    getUserDetails(id),
    getUserPosts(id),
    getUserAlbums(id),
  ]);

  const initials = userDetails.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* User Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex items-center space-x-6">
          <div className="w-20 h-20 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-2xl text-white font-bold">
            {initials}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{userDetails.name}</h2>
            <p className="text-indigo-500">@{userDetails.username}</p>
            <p className="text-sm mt-1">
              📧 {userDetails.email} | 📱 {userDetails.phone}
            </p>
            <p className="text-sm">
              🌐{" "}
              <a href={`http://${userDetails.website}`} className="text-blue-600 hover:underline" target="_blank">
                {userDetails.website}
              </a>
            </p>
          </div>
        </div>

        {/* Address & Company Info */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Address */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">📍 Address</h3>
            <p>{userDetails.address.street}, {userDetails.address.suite}</p>
            <p>{userDetails.address.city}, {userDetails.address.zipcode}</p>
            <p className="text-xs italic mt-1">
              Geo: lat {userDetails.address.geo.lat}, lng {userDetails.address.geo.lng}
            </p>
          </div>

          {/* Company */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">🏢 Company</h3>
            <p className="font-bold">{userDetails.company.name}</p>
            <p className="italic">"{userDetails.company.catchPhrase}"</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{userDetails.company.bs}</p>
          </div>
        </div>

        <Suspense fallback={<div className="text-center text-gray-500 dark:text-gray-400">Loading posts...</div>}>
        {/* Posts Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-2xl font-semibold mb-4">📝 Posts</h3>
          <div className="space-y-4">
            {userPosts.map((post) => (
              <div key={post.id} className="border-b pb-4 last:border-b-0">
                <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">{post.title}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">{post.body}</p>
              </div>
            ))}
          </div>
        </div>
        </Suspense>
        <Suspense fallback={<div className="text-center text-gray-500 dark:text-gray-400">Loading posts...</div>}>
        {/* Albums Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-2xl font-semibold mb-4">📸 Albums</h3>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-5">
            {userAlbums.map((album) => (
              <li key={album.id} className="text-indigo-700 dark:text-indigo-300">
                {album.title}
              </li>
            ))}
          </ul>
        </div>
                </Suspense>

      </div>
    </div>
  );
};

export default UserDetailsInParallel;
