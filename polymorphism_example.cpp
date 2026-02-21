// polymorphism_example.cpp
//
// This file demonstrates C++ runtime polymorphism using virtual functions.
//
// KEY CONCEPT — Why does main() use a base-class pointer/reference?
// ---------------------------------------------------------------
// When a virtual function is called through a BASE-CLASS pointer or reference,
// C++ performs *runtime* (dynamic) dispatch: the program looks up the actual
// type of the object at run-time and calls the overridden version in the
// derived class.  This is "runtime polymorphism."
//
// When the same function is called with explicit scope resolution
// (e.g. obj.Base::speak()), the compiler resolves the call at *compile time*
// to the base-class version, bypassing the virtual-dispatch mechanism entirely.
// This is NOT polymorphism — it always runs the base implementation regardless
// of the object's actual runtime type.
//
// The original main() called methods directly on derived-class objects, which
// works but does not demonstrate polymorphism at all (the compiler already
// knows the exact type, so no dispatch is needed).  The updated main() stores
// derived objects through a Base* pointer so that virtual dispatch kicks in
// and the correct overridden method is selected at run-time.

#include <iostream>
#include <vector>

// ---------------------------------------------------------------------------
// Base class — declares speak() as virtual so derived classes can override it
// ---------------------------------------------------------------------------
class Animal {
public:
    // 'virtual' tells the compiler to use dynamic dispatch when this function
    // is called through a pointer or reference to Animal.
    virtual void speak() const {
        std::cout << "Animal speaks (base implementation)\n";
    }

    // A virtual destructor is required whenever a class is used polymorphically
    // so that deleting a derived object through a base pointer calls the right
    // destructor chain.
    virtual ~Animal() = default;
};

// ---------------------------------------------------------------------------
// Derived classes — each overrides speak() with its own implementation
// ---------------------------------------------------------------------------
class Dog : public Animal {
public:
    // 'override' (C++11) makes the compiler verify that we are indeed
    // overriding a virtual function in the base class.
    void speak() const override {
        std::cout << "Dog says: Woof!\n";
    }
};

class Cat : public Animal {
public:
    void speak() const override {
        std::cout << "Cat says: Meow!\n";
    }
};

// ---------------------------------------------------------------------------
// Helper — accepts ANY Animal through a base-class reference.
// Because speak() is virtual, the correct derived-class version is called
// automatically without the caller needing to know the concrete type.
// ---------------------------------------------------------------------------
void makeNoise(const Animal& animal) {
    animal.speak();   // runtime dispatch → calls Dog::speak or Cat::speak
}

// ---------------------------------------------------------------------------
// main() — shows BOTH approaches side-by-side with explanations
// ---------------------------------------------------------------------------
int main() {
    Dog dog;
    Cat cat;

    // ------------------------------------------------------------------
    // APPROACH 1 — Direct call on a derived-class object (compile-time)
    //
    // The compiler already knows the exact type (Dog / Cat), so no
    // virtual dispatch is needed.  This is NOT runtime polymorphism;
    // it just happens to call the right function because the type is
    // statically known.
    // ------------------------------------------------------------------
    std::cout << "--- Direct calls (no polymorphism) ---\n";
    dog.speak();   // always calls Dog::speak — type known at compile time
    cat.speak();   // always calls Cat::speak — type known at compile time

    // ------------------------------------------------------------------
    // APPROACH 2 — Explicit scope resolution (bypasses virtual dispatch)
    //
    // Using Animal::speak() forces the BASE-class implementation even
    // though the object is a Dog or Cat.  This completely skips the
    // virtual dispatch mechanism and is rarely what you want.
    // ------------------------------------------------------------------
    std::cout << "\n--- Explicit scope resolution (bypasses virtual dispatch) ---\n";
    dog.Animal::speak();   // calls Animal::speak, NOT Dog::speak
    cat.Animal::speak();   // calls Animal::speak, NOT Cat::speak

    // ------------------------------------------------------------------
    // APPROACH 3 — Base-class pointer / reference (TRUE runtime polymorphism)
    //
    // The pointer type is Animal*, but the objects are Dog and Cat.
    // When speak() is called, C++ checks the vtable at run-time and
    // dispatches to Dog::speak or Cat::speak — even though the caller
    // only knows about Animal.  This is the essence of polymorphism:
    // one interface, multiple behaviours selected at runtime.
    // ------------------------------------------------------------------
    std::cout << "\n--- Base-class pointer (runtime polymorphism / virtual dispatch) ---\n";
    Animal* p1 = &dog;
    Animal* p2 = &cat;
    p1->speak();   // runtime dispatch → Dog::speak
    p2->speak();   // runtime dispatch → Cat::speak

    // The same effect through a base-class reference:
    std::cout << "\n--- Base-class reference (runtime polymorphism via makeNoise()) ---\n";
    makeNoise(dog);   // passes Dog as Animal& → Dog::speak is called
    makeNoise(cat);   // passes Cat as Animal& → Cat::speak is called

    // ------------------------------------------------------------------
    // APPROACH 4 — Polymorphism in a container (most practical use-case)
    //
    // A single vector<Animal*> can hold any mixture of derived types.
    // Iterating and calling speak() lets each object respond differently
    // — that is runtime polymorphism in action.
    // ------------------------------------------------------------------
    std::cout << "\n--- Polymorphic container ---\n";
    std::vector<Animal*> animals = { &dog, &cat, &dog };
    for (const Animal* a : animals) {
        a->speak();   // correct overridden method called for each element
    }

    return 0;
}
