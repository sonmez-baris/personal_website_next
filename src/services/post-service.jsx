import {config} from '@/config';

const PostService = {
  get: async (params) => {
    try{
      const response = await fetch(`${config.API_URL}/posts?${params}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json', 
        },
      });
      return response.json();
    } catch (error) {
      return error.response;
    }
  },
  show: async (seflink) => {
    try {
      const response = await fetch(`${config.API_URL}/posts/${seflink}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json', 
        },
      });

      return response.json();
    } catch (error) {
      return error.response;
    }
  },
};

export default PostService;