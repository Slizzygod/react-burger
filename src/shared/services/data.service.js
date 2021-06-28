class DataService {
  async get(url) {
    try {
      const response = await fetch(url);
      const result = await this.toJson(response);
      return result.data;
    } catch (error) {
      this.onError(error);
    }
  }

  async toJson(response) {
    return response.json();
  }

  onError(error) {
    console.log(error);
  }
}

export const dataService = new DataService();
