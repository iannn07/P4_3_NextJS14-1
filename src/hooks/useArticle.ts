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

  return {
    article,
    getArticle,
  };
};
