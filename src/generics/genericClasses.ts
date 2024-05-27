/*
class NumberBox {
  private items: number[] = [];

  public addItem(item: number): void {
    this.items.push(item);
  }

  get getItems(): number[] {
    return this.items;
  }
}

const numberBox = new NumberBox();
numberBox.addItem(1);
numberBox.addItem(2);
numberBox.addItem(3);

console.log(numberBox.getItems); // Output: [1, 2, 3]
*/

/*
class AnyBox {
  private items: any[] = [];

  public addItem(item: any): void {
    this.items.push(item);
  }

  get getItems(): any[] {
    return this.items;
  }
}

const anyBox = new AnyBox();
anyBox.addItem(1);
anyBox.addItem('hello');
anyBox.addItem(true);
anyBox.addItem({ name: 'Fabian' });
anyBox.addItem(() => {
  console.log('esto es una función');
});

console.log(anyBox.getItems); // Output: [1, 'hello', true, { name: 'Fabian' }, ƒ]
*/

class Box<T> {
  private items: T[] = [];

  public addItem(item: T): void {
    this.items.push(item);
  }

  get getItems(): T[] {
    return this.items;
  }
}

const numberBox = new Box<number>();

numberBox.addItem(1);
numberBox.addItem(2);
numberBox.addItem(3);
//numberBox.addItem('4');  //Error: Argument of type '"4"' is not assignable to parameter of type 'number'.

console.log(numberBox.getItems); // Output: [1, 2, 3]

const stringBox = new Box<string>();

stringBox.addItem('hello');
stringBox.addItem('world');

console.log(stringBox.getItems); // Output: ['hello', 'world']

const booleanBox = new Box<boolean>();

booleanBox.addItem(true);
booleanBox.addItem(false);

console.log(booleanBox.getItems); // Output: [true, false]
