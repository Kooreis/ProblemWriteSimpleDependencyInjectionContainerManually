```cpp
#include <iostream>
#include <map>
#include <string>
#include <functional>

class Service {
public:
    virtual ~Service() {}
};

class ServiceA : public Service {
public:
    ServiceA() {
        std::cout << "ServiceA created\n";
    }
    ~ServiceA() {
        std::cout << "ServiceA destroyed\n";
    }
};

class ServiceB : public Service {
public:
    ServiceB() {
        std::cout << "ServiceB created\n";
    }
    ~ServiceB() {
        std::cout << "ServiceB destroyed\n";
    }
};

class Container {
private:
    std::map<std::string, std::function<Service*()>> m_creators;
public:
    template <typename T>
    void RegisterService(std::string serviceName) {
        m_creators[serviceName] = []() { return new T(); };
    }

    Service* Create(std::string serviceName) {
        return m_creators[serviceName]();
    }
};

int main() {
    Container container;
    container.RegisterService<ServiceA>("ServiceA");
    container.RegisterService<ServiceB>("ServiceB");

    Service* serviceA = container.Create("ServiceA");
    Service* serviceB = container.Create("ServiceB");

    delete serviceA;
    delete serviceB;

    return 0;
}
```