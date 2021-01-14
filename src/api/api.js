export const API = {
  baseUrl: 'https://jsonplaceholder.typicode.com/',
  async requestPosts() {
    const response = await fetch(`${this.baseUrl}posts`)
    return response.json()
  },
  async requestUsers() {
    const response = await fetch(`${this.baseUrl}users`)
    return response.json()
  },
}
