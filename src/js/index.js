/* Main entrypoint js */
import testingImport from './someModule';

const asyncModule = import('./asyncModule');

console.log('ENV', process.env.NODE_ENV);
console.log(testingImport);

asyncModule.then(({ sum }) => {
  console.log('sum', sum(22, 20));
});
