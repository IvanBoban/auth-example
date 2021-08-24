import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { GetRequest, PostRequest } from "./types";

export default class HTTPService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_AUTH_API,
      headers: {
        "Authorization ": process.env.REACT_APP_AUTH_HEADER,
      },
    });
  }

  get({ url, params }: GetRequest) {
    return this.instance.get(url, params);
  }

  post({ url, data }: PostRequest) {
    return this.instance.post(url, data);
  }
}
