// polymorphism.cpp
// Demonstrates runtime polymorphism in C++:
//   - A base class pointer (upcasting) pointing to a derived class object.
//   - A virtual function overridden in the derived class is called through
//     the base class pointer, resolving at runtime (dynamic dispatch).
//
// Compile: g++ -o polymorphism polymorphism.cpp
// Run:     ./polymorphism
//
// Expected output:
//   Animal speaks: generic animal sound
//   Dog speaks:    Woof!
//   Cat speaks:    Meow!

#include <iostream>
#include <string>

// Base class
class Animal {
public:
    std::string name;

    Animal(const std::string& name) : name(name) {}

    // Virtual function — overridden by derived classes.
    // The 'virtual' keyword enables runtime polymorphism.
    virtual void speak() const {
        std::cout << name << " speaks: generic animal sound\n";
    }

    // Virtual destructor ensures proper cleanup of derived objects
    // when deleted through a base class pointer.
    virtual ~Animal() {}
};

// Derived class 1
class Dog : public Animal {
public:
    Dog(const std::string& name) : Animal(name) {}

    // Override the base class virtual function
    void speak() const override {
        std::cout << name << " speaks:    Woof!\n";
    }
};

// Derived class 2
class Cat : public Animal {
public:
    Cat(const std::string& name) : Animal(name) {}

    // Override the base class virtual function
    void speak() const override {
        std::cout << name << " speaks:    Meow!\n";
    }
};

int main() {
    // Upcasting: base class pointers pointing to derived class objects.
    // The actual type of the object determines which speak() is called
    // (runtime polymorphism / dynamic dispatch).
    Animal* animals[] = {
        new Animal("Animal"),   // base object
        new Dog("Dog"),         // derived: Dog
        new Cat("Cat")          // derived: Cat
    };

    for (Animal* a : animals) {
        a->speak();             // resolved at runtime via vtable
    }

    // Clean up — virtual destructor ensures derived destructors are called
    for (Animal* a : animals) {
        delete a;
    }

    return 0;
}
