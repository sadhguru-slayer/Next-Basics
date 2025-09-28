import React from 'react'
import Link from 'next/link';
const Articles = () => {
    const articles = [
        { id: 1, title: 'Understanding React Hooks',langs: ['en','fr'] },
        { id: 2, title: 'A Guide to Next.js', langs: ['en','de'] },
        { id: 3, title: 'Styling in React', langs: ['en','es'] },
    ];
  return (
    <div>
    <h1>Articles Page</h1>
    <ul>
        {articles.map((article) =>(
            <li key={article.id}>
            <Link href={`/articles/${article.id}?lang=${article.langs[0]}`}>
            {article.title}
            </Link>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default Articles