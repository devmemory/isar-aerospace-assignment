import { StatusModel } from "src/models/statusModel";
import Api from "./api";

class StatusApi extends Api {
  async getStatus() {
    const res = await super.get<StatusModel>("/api/SpectrumStatus");
    //api : "/api/SpectrumStatus"
    //mock : "/assets/data/mock.json"

    return res.data;
  }

  async getAction() {
    const res = await super.get("/api/ActOnSpectrum");

    console.log({ res });
  }
}

/** - status api */
export const getStatus = async () => {
  const api = new StatusApi();

  return await api.getStatus();
};

/** - action api */
export const getAction = async () => {
  const api = new StatusApi();

  return await api.getAction();
};