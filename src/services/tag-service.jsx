import {config} from '@/config';

const TagService = {
  get: async () => {
    try{
      const response = await fetch(`${config.API_URL}/tags`, {
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
  show: async (tag) => {
    try {
      const response = await fetch(`${config.API_URL}/tag/${tag}`, {
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

export default TagService;