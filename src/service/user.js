class User {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  async getInfo(pageCount, limitCount) {
    const { data } = await this.httpClient.get(
      `?_page=${pageCount}&_limit=${limitCount}`
    );
    return data;
  }
}

export default User;
