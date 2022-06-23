import axios from "axios";

var catalog = [];

class DataService {
  async getCatalog() {
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    let data = response.data;
    return data;

    //return catalog;
  }

  async getCoupons() {
    let response = await axios.get("http://127.0.0.1:500/api/coupons");
    return response.data;
  }
}

export default DataService;
