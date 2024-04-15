'use client';

import { useArticle } from '@/hooks/useArticle';
import { useEffect } from 'react';

const Article = () => {
  const { article, getArticle } = useArticle();

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  return (
    <div>
      <h1 className='text-3xl font-bold'>Articles</h1>
      <ul className='flex flex-col gap-5 mt-5'>
        {article.map((item: any, index: number) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Article;
