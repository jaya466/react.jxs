// Homework Q2: Upcasting and Runtime Polymorphism in C++
//
// Demonstrates:
//  - A base class pointer pointing to a derived class object (upcasting)
//  - An overridden virtual function so that calling through the base pointer
//    invokes the derived class implementation (runtime polymorphism)
//
// Expected output:
//   Animal speaks: generic animal sound
//   Dog speaks: Woof!
//   Cat speaks: Meow!

#include <iostream>
#include <memory>

// Base class
class Animal {
public:
    // Virtual function – enables runtime polymorphism
    virtual void speak() const {
        std::cout << "Animal speaks: generic animal sound" << std::endl;
    }

    // Virtual destructor ensures proper cleanup when deleting via base pointer
    virtual ~Animal() {}
};

// Derived class 1
class Dog : public Animal {
public:
    // Override the virtual function
    void speak() const override {
        std::cout << "Dog speaks: Woof!" << std::endl;
    }
};

// Derived class 2
class Cat : public Animal {
public:
    // Override the virtual function
    void speak() const override {
        std::cout << "Cat speaks: Meow!" << std::endl;
    }
};

int main() {
    // Base class pointer pointing to a base class object
    std::unique_ptr<Animal> ptr = std::make_unique<Animal>();
    ptr->speak();   // Calls Animal::speak()

    // Upcasting: base class pointer pointing to a derived class object (Dog)
    ptr = std::make_unique<Dog>();
    ptr->speak();   // Calls Dog::speak() – runtime polymorphism

    // Upcasting: base class pointer pointing to a derived class object (Cat)
    ptr = std::make_unique<Cat>();
    ptr->speak();   // Calls Cat::speak() – runtime polymorphism

    return 0;
}
