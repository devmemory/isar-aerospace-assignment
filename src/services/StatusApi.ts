import { StatusModel } from "src/models/statusModel";
import Api from "./api";

export default class StatusApi extends Api {
  async getStatus() {
    const res = await super.get<StatusModel>("/api/SpectrumStatus");
    //api : "/api/SpectrumStatus"
    //mock : "/assets/data/mock.json"

    return res.data;
  }

  async getAction() {
    const res = await super.get("/api/ActOnSpectrum");

    console.log({res})
  }
}
