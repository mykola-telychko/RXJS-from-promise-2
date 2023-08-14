import { from } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/from
// Example 2: Observable from promise
//emit result of promise
const promiseSrc = from(new Promise((resolve) => resolve('Hello World!')));
//output: 'Hello World'
const subscribe = promiseSrc.subscribe((val) => console.log(val));
