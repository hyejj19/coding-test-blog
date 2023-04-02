import { httpClient } from '../utils/httpClient';
import { BlogListResp, BlogPostResp } from '../types/types';

export const blogApi = {
  async getBlogList() {
    const payload = JSON.stringify({
      collection: 'posts',
      database: 'sample_training',
      dataSource: 'Cluster0',
    });

    try {
      const response = await httpClient.post<BlogListResp>('/api/app/data-lhvnl/endpoint/data/v1/action/find', payload);

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('블로그 리스트 가져오기 요청 실패!');
    }
  },
  getBlogDetail() {
    console.log('blogDetail');
  },
};
