import { AxiosRequestConfig } from "axios";

export interface GetRequest {
  url: string;
  params: object;
}

export interface PostRequest {
  url: string;
  data: object;
}
