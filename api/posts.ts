import axios from "axios";

export class FakePostAPI {
  static async getAllPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }

  static async getPostById(id: number) {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res.data;
  }
}
