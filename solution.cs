Here is a simple implementation of a dependency injection container in JavaScript:

```javascript
class Container {
    constructor() {
        this.dependencies = {};
    }

    register(key, value) {
        this.dependencies[key] = value;
    }

    get(key) {
        if (!this.dependencies[key]) {
            throw new Error(`${key} is not registered in container.`);
        }
        return this.dependencies[key];
    }
}

const container = new Container();

container.register('name', 'John Doe');
container.register('age', 30);

console.log(container.get('name')); // John Doe
console.log(container.get('age')); // 30
```