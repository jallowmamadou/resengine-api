import { Service } from "typedi";
import axios from "axios";
import { AxiosInstance } from "axios";

@Service()
export class HttpService {
  private client: AxiosInstance;

  constructor() {
    if (!this.client) {
      this.client = axios.create({
        timeout: 1000,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    }
  }

  /**
   * Sets an axios instance.
   *
   * @param {AxiosInstance} client
   * @returns {this}
   */
  public setClient(client: AxiosInstance) {
    this.client = client;

    return this;
  }

  /**
   * Gets axios instance.
   *
   * @returns {AxiosInstance}
   */
  getInstance() {
    return this.client;
  }
}
