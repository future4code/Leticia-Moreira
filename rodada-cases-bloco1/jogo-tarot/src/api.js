import axios from 'axios';

const baseURL =
    "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/"

export const getCartaToChooseRequest = async () => {
    const response = await axios.get(`${baseURL}/carta`);
  
    return response.data.carta;
  };
  
  export const chooseCartaRequest = (name, image) => {
    const body = {
      name: name,
      image: image
    };
  
    return axios.post(`${baseURL}/choose-carta`, body);
  };

  
export default baseURL
