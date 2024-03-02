import {config} from '@/config';

console.log(config.API_URL);

const TagService = {
  get: async () => {
    try{
      const response = await fetch(`${config.API_URL}/tags`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json', 
          'Authorization': 'Bearer ' + config.TOKEN,
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
          'Authorization': 'Bearer ' + config.TOKEN,
        },
      });

      return response.json();
    } catch (error) {
      return error.response;
    }
  },
};

export default TagService;