
import React, {
  Component
}
from 'react';

import style from './style';
class ModuleRoot extends Component {
  constructor(props) {
    super(props);

    function* generator() {
      yield 'f'
      yield 'o'
      yield 'o'
    }
    var g = generator()
      // a generator object g is built using the generator function
    console.log(typeof g[Symbol.iterator])// === 'function'
      // it's an iterable because it has an @@iterator
    typeof g.next === 'function'
      // it's also an iterator because it has a .next method
    g[Symbol.iterator]() === g
      // the iterator for a generator object is the generator object itself
    console.log([...g])
      // <- ['f', 'o', 'o']
    console.log(Array.from(g))
      // <- ['f', 'o', 'o']
    console.log('hello');
  }
  render() {
    return (
    <div className = { `module-a ${style['module-style']}` } >
      <p> Module A </p>
    </div>
    );
  }
}

export default ModuleRoot;
