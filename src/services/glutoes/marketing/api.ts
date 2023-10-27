import axios from "axios";
import { getServerSession } from "next-auth";

const api = axios.create({ baseURL: "https://newmkt.glutoes.com/" });

const fetchAutoPilot = async () => {
  const store_id = "632af537c77f0ab2861de8e1";
  return (await api.get(`campaigns/store/${store_id}?platform=whatsapp`)).data;
};

export { fetchAutoPilot };
