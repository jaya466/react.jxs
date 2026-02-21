// Homework Question 1: Runtime Polymorphism using Virtual Functions
//
// This program demonstrates runtime polymorphism in C++.
// A base class pointer (Animal*) is used to call overridden virtual
// functions in derived classes, selecting the correct implementation
// at runtime (dynamic dispatch).
//
// Expected output:
//   Animal speaks
//   Dog barks
//   Dog barks

#include <iostream>

class Animal {
public:
    // Virtual function: allows derived classes to override it.
    // Without 'virtual', the base class version would always be called
    // when using a base class pointer (no runtime polymorphism).
    virtual void speak() const {
        std::cout << "Animal speaks" << std::endl;
    }

    // Virtual destructor ensures the correct destructor is called
    // when deleting a derived object through a base class pointer.
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    // Override the base class virtual function.
    void speak() const override {
        std::cout << "Dog barks" << std::endl;
    }
};

int main() {
    Animal animal;
    Dog dog;

    // Base class pointer pointing to a base class object.
    // Calls Animal::speak() -> outputs: Animal speaks
    Animal* ptr = &animal;
    ptr->speak();

    // Base class pointer pointing to a derived class object.
    // Because speak() is virtual, Dog::speak() is called at runtime.
    // Outputs: Dog barks
    ptr = &dog;
    ptr->speak();

    // Direct call on a Dog object also calls Dog::speak().
    // Outputs: Dog barks
    dog.speak();

    return 0;
}
