import { supabase } from '@/lib/supabase';
import { useState } from 'react';

export const useArticle = () => {
  const [article, setArticle] = useState([]) as any;

  const getArticle = async () => {
    const { data, error } = await supabase.from('article').select('*');
    if (data) {
      setArticle(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const subscribeToArticles = async () => {
    supabase
      .channel('article-realtime')
      .on(
        'postgres_changes',
        { schema: 'public', table: 'article', event: '*' },
        (payload: any) => {
          console.log(payload);
        }
      )
      .subscribe();
  };

  const subscribeArticle = supabase
    .channel('article-realtime')
    .on(
      'postgres_changes',
      { schema: 'public', table: 'article', event: '*' },
      (payload: any) => {
        console.log(payload);
      }
    )
    .subscribe();

  return {
    article,
    getArticle,
    subscribeToArticles,
    subscribeArticle,
  };
};
