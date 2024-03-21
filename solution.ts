Here is a simple TypeScript console application that demonstrates a basic implementation of a dependency injection container:

```typescript
class DependencyContainer {
    private dependencies: Map<string, any>;

    constructor() {
        this.dependencies = new Map();
    }

    register(name: string, dependency: any) {
        this.dependencies.set(name, dependency);
    }

    resolve(name: string) {
        if (!this.dependencies.has(name)) {
            throw new Error(`Dependency ${name} is not registered.`);
        }
        return this.dependencies.get(name);
    }
}

class ServiceA {
    sayHello() {
        console.log('Hello from ServiceA');
    }
}

class ServiceB {
    sayHello() {
        console.log('Hello from ServiceB');
    }
}

const container = new DependencyContainer();
container.register('serviceA', new ServiceA());
container.register('serviceB', new ServiceB());

const serviceA = container.resolve('serviceA') as ServiceA;
serviceA.sayHello();

const serviceB = container.resolve('serviceB') as ServiceB;
serviceB.sayHello();
```

In this code, `DependencyContainer` is a simple dependency injection container. It has a `register` method to register a dependency and a `resolve` method to resolve a dependency. `ServiceA` and `ServiceB` are two simple services that can be registered and resolved from the container. The code at the end creates a new container, registers the services, resolves them, and calls a method on each.