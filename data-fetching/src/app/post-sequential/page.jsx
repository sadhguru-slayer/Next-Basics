import React,{Suspense} from "react";
import AuthorName from "./author";
import Link from 'next/link';

const PostSequential = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // Filter posts where id is divisible by 9
  const filteredPosts = posts.filter((post) => post.id % 9 === 0);
  

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Filtered Posts</h2>
      <div className="space-y-6">
        {filteredPosts.map(({ id, title, body, userId }) => (
          <div
            key={id}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm"
          >
            {/* ID is not visible but stored in a data attribute */}
            <div data-post-id={id} className="hidden"></div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{body}</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Written By:</span> <Link href={`/user-parallel/${userId}`}>
              <Suspense fallback={<div className="text-sm text-gray-500 italic">Loading author...</div>}>
              <AuthorName userId={userId} />
              </Suspense>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostSequential;
