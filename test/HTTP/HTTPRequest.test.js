import HTTPRequest from "../../src/HTTP/HTTPRequest";

describe('Test to class HTTPRequest', () => {
  const options = {
    base_uri: 'https://jsonplaceholder.typicode.com/',
  }
  const http_request = new HTTPRequest(options);
  
  it('should be defined', () => {
    expect(http_request).toBeDefined();
  });
  it('access item in GET', async () => {
    const response = await http_request.get('todos/1');
    expect(response.status).toBe(200);
  });  
});