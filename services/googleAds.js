import axios from "axios";
const axiosConfig = `${process.env.NEXT_PUBLIC_API_HOST}/api/v1/user`;

class googleAds {
  async googleAuth() {
    return await axios.get(`${axiosConfig}/google/auth`);
  }
  async googleReports(){
    return await axios.get(`${axiosConfig}/google/reports`);
  }
}


export default new googleAds();