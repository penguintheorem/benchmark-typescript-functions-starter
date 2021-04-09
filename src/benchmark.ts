import { getSample } from './utils';
import Benchmark from 'benchmark';
import { bubbleSortNaive } from './bubble-sort-naive';
import { bubbleSortOptimized } from './bubble-sort-optimized';

const suite = new Benchmark.Suite('functions comparison');
const sample = getSample(100000);

suite.add(`${bubbleSortNaive.name}`, () => bubbleSortNaive(sample));
suite.add(`${bubbleSortOptimized.name}`, () => bubbleSortOptimized(sample));

suite.on('complete', print);

suite.run();

function print() {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i].toString());
  }

  console.log('fastest is', this.filter('fastest').map('name')[0]);
}
