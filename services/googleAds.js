import axios from "axios";
const axiosConfig = `${process.env.NEXT_PUBLIC_API_HOST}/api/v1/user`;

class googleAds {
  async googleAuth() {
    return await axios.get(`${axiosConfig}/google/auth`);
  }
}


export default new googleAds();