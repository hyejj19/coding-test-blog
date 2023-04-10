import { httpClient } from '../utils/httpClient';
import { ApiRequestInfoType } from '../types/types';

export const blogApi = {
  async getBlogList(apiRequestInfo: ApiRequestInfoType) {
    const { pageIndex, pageSize } = apiRequestInfo;

    const skip = (pageIndex - 1) * pageSize;
    const limit = pageSize;

    const payload = JSON.stringify({
      collection: 'posts',
      database: 'sample_training',
      dataSource: 'Cluster0',
      skip,
      limit,
    });

    try {
      const response = await httpClient.post(`/api/app/data-lhvnl/endpoint/data/v1/action/find`, payload);
      return response.data.documents;
    } catch (error) {
      console.error(error);
      throw new Error('블로그 리스트 가져오기 요청 실패!');
    }
  },

  async getBlogPost(apiRequestInfo: ApiRequestInfoType) {
    const { id: $oid } = apiRequestInfo;

    const payload = JSON.stringify({
      collection: 'posts',
      database: 'sample_training',
      dataSource: 'Cluster0',
      filter: { _id: { $oid } },
    });

    try {
      const response = await httpClient.post(`/api/app/data-lhvnl/endpoint/data/v1/action/findOne`, payload);

      return response.data.document;
    } catch (error) {
      console.error(error);
      throw new Error('블로그 데이터 가져오기 요청 실패!');
    }
  },
};
