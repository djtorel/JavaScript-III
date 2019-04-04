/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global or Window object Binding:
  By default  when no other principles apply, `this` binds to Window (browser)
  or Global (node);

* 2. Implicit Binding:
  When JavaScript uses default binding defined by the language spec, which is
  usually whenever a function is preceeded by a dot and called, `this` represents
  the object before the dot.

* 3. New Binding:
  When a constructor function is called, `this` refers to the new object created
  and returned by the constructor.

* 4. Explicit binding:
  When using the .call() or .apply() methods, `this` is explicitly bound.
*
* write out a code example of each explanation above
*/

// Principle 1
let test = this;
console.log(test); // Outputs the Window object in browsers, or Global in Nodejs

// Principle 2

const example = {
  foo: 'Hello World',
  print() {
    console.log(this.foo);
  },
};

example.print(); // Prints to the console "Hello World"

// Principle 3

function Animal({ species, domain }) {
  this.species = species;
  this.domain = domain;
  this.print = function() {
    console.log(`The species "${this.species}" lives on/in ${this.domain}`);
  };
}

const dog = new Animal({
  species: 'Canine',
  domain: 'Land',
});

dog.print();

// Principle 4

function printThingInThis(thing) {
  console.log(this[thing]);
}

const testObject = {
  test: 'This is a test please ignore',
};

printThingInThis.call(testObject, 'test');
