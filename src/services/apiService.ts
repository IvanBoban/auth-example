import HTTPService from "./httpService";

export default class ApiService {
  private httpService: HTTPService;

  constructor() {
    this.httpService = new HTTPService();
  }

  signIn(email: string, password: string) {
    return this.httpService.post({
      url: "/signIn",
      data: { email, password },
    });
  }

  signOut(email: string) {
    return this.httpService.post({
      url: "/signOutLocation",
      data: { email },
    });
  }
}
