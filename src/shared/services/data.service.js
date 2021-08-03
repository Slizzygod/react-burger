class DataService {
  async get(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Произошла неизвестная ошибка");
      }
      const result = await this.toJson(response);
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async post(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Произошла неизвестная ошибка");
      }
      const result = await this.toJson(response);
      return result;
    } catch (error) {
      throw new Error(error);
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
