import axios from "axios";
const axiosConfig = `${process.env.NEXT_PUBLIC_API_HOST}/api/v1/user`;

class facebookAds {
  async facbookAuth() {
    return await axios.get(`${axiosConfig}/facebook/auth`);
  }
}


export default new facebookAds();