import { from } from 'rxjs';
import { http } from 'http';

function httpRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data);
      });

      response.on('error', (error) => {
        reject(error);
      });
    });
  });
}

const url = 'http://jsonplaceholder.typicode.com/posts/1'; // Example URL

httpRequest(url)
  .then((responseData) => {
    console.log('Response:', responseData);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

// https://www.learnrxjs.io/learn-rxjs/operators/creation/from
// Example 2: Observable from promise
//emit result of promise
const promiseSrc = from(new Promise((resolve) => resolve('Hello World!')));
//output: 'Hello World'
const subscribe = promiseSrc.subscribe((val) => console.log(val));
