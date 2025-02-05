import axios from "axios";
import { Posts } from "../interface";

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

  static async createPost(data: Posts) {
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      data
    );

    return res.data;
  }

  static async updatePost(id: number, data: Partial<Posts>) {
    const res = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/${id}",
      data
    );
    return res.data;
  }

  static async deletePost(id: number) {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res.data;
  }
}
