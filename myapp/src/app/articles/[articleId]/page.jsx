'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams, useParams } from 'next/navigation';

const ArticleDetails = () => {
  const searchParams = useSearchParams();
  const params = useParams();

  const lang = searchParams.get('lang') || 'en';
  const articleId = params.articleId;

  return (
    <div>
      <h1>Article Details Page</h1>
        <p>Article ID: {articleId}</p>
        <p>Current Language: {lang}</p>
      <div>
        <p>Switch the language:</p>
        <ul>
          {lang !== 'en' && (
            <li>
              <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            </li>
          )}
          {lang !== 'fr' && (
            <li>
              <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </li>
          )}
          {lang !== 'de' && (
            <li>
              <Link href={`/articles/${articleId}?lang=de`}>Danish</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ArticleDetails;
